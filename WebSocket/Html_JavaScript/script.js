(() => {
  const els = {
    host: document.getElementById('host'),
    loggerType: document.getElementById('loggerType'),
    loggerToggleBtn: document.getElementById('loggerToggleBtn'),
    commandToggleBtn: document.getElementById('commandToggleBtn'),
    payload: document.getElementById('payload'),
    sendBtn: document.getElementById('sendBtn'),
    output: document.getElementById('output')
  };

  let loggerSocket = null;
  let cmdSocket = null;

  const MAX_LINES = 10;
  const logLines = [];

  function updateSendBtn() {
    const loggerConnected = !!(loggerSocket && loggerSocket.readyState === WebSocket.OPEN);
    const cmdConnected = !!(cmdSocket && cmdSocket.readyState === WebSocket.OPEN);
    els.sendBtn.disabled = !(loggerConnected || cmdConnected);
  }

  function buildWsUrl(path) {
    const host = (els.host.value || '').trim();
    if (!host) throw new Error('Please enter Gateway Hostname/IP');
    const isUrl = /^(ws(s)?:\/\/)/i.test(host) || /^(http(s)?:\/\/)/i.test(host);
    let url;
    if (isUrl) {
      // If user typed a full scheme, convert http(s) -> ws(s) if needed
      try {
        const u = new URL(host);
        const scheme = u.protocol.startsWith('https') ? 'wss:' : 'ws:';
        url = `${scheme}//${u.host}${path}`;
      } catch {
        url = `ws://${host}${path}`;
      }
    } else {
      url = `ws://${host}${path}`;
    }
    return url;
  }

  function setBtnState(btn, connectedLabel, disconnectedLabel, isConnected) {
    btn.dataset.state = isConnected ? 'connected' : 'disconnected';
    btn.textContent = isConnected ? connectedLabel : disconnectedLabel;
  }

  function appendLine(message, type = 'info') {
    const time = new Date().toLocaleTimeString();
    const line = `[${time}] ${message}`;
    logLines.push(line);
    while (logLines.length > MAX_LINES) logLines.shift();
    els.output.innerHTML = logLines.map(l => `<p>${l}</p>`).join('');
  }

  function arrayBufferToHex(buffer) {
    const bytes = new Uint8Array(buffer);
    return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join(' ');
  }

  function connectLogger() {
    if (loggerSocket && loggerSocket.readyState === WebSocket.OPEN) return;
    const host = (els.host.value || '').trim();
    const type = (els.loggerType.value).trim();
    if (!host) { alert('Please enter Gateway Hostname/IP'); return; }
    const url = `ws://${host}:81/${encodeURIComponent(type)}`;

    loggerSocket = new WebSocket(url);
    loggerSocket.binaryType = 'arraybuffer';

    loggerSocket.onopen = () => {
      setBtnState(els.loggerToggleBtn, 'Disconnect from logger', 'Connect to logger', true);
      appendLine('Logger connected');
      updateSendBtn();
    };
    loggerSocket.onmessage = (ev) => {
      let msg;
      const typeLower = (els.loggerType.value || '').toLowerCase();
      if (ev.data instanceof ArrayBuffer) {
          try { msg = new TextDecoder().decode(ev.data); }
          catch { msg = '[binary data]'; }
      } else {
        msg = ev.data;
      }
      appendLine(`LOG: ${msg}`);
    };
    loggerSocket.onerror = () => {
      appendLine('Logger error', 'error');
    };
    loggerSocket.onclose = () => {
      setBtnState(els.loggerToggleBtn, 'Disconnect from logger', 'Connect to logger', false);
      loggerSocket = null;
      appendLine('Logger disconnected');
      updateSendBtn();
    };
  }

  function disconnectLogger() {
    if (loggerSocket) {
      loggerSocket.close();
    }
  }

  function connectCmd() {
    if (cmdSocket && cmdSocket.readyState === WebSocket.OPEN) return;
    const host = (els.host.value || '').trim();
    if (!host) { alert('Please enter Gateway Hostname/IP'); return; }
    const url = `ws://${host}:81/MessageLogger`;

    cmdSocket = new WebSocket(url);

    cmdSocket.onopen = () => {
      setBtnState(els.commandToggleBtn, 'Disconnect', 'Connect', true);
      appendLine('Command connected');
      updateSendBtn();
    };
    cmdSocket.onmessage = (ev) => {
      const msg = typeof ev.data === 'string' ? ev.data : '[binary]';
      appendLine(`CMD: ${msg}`);
      // Auto time sync if MCU requests it on MessageLogger channel
      if (msg === '/GetTime') {
        const now = Date.now();
        const tzOffsetMs = new Date().getTimezoneOffset() * 60 * 1000;
        const payload = `{TimeUTC:"${now + tzOffsetMs}"}`;
        try { cmdSocket.send(payload); appendLine(`SENT: ${payload}`); } catch {}
      }
    };
    cmdSocket.onerror = () => {
      appendLine('Command error', 'error');
    };
    cmdSocket.onclose = () => {
      setBtnState(els.commandToggleBtn, 'Disconnect', 'Connect', false);
      cmdSocket = null;
      appendLine('Command disconnected');
      updateSendBtn();
    };
  }

  function disconnectCmd() {
    if (cmdSocket) {
      cmdSocket.close();
    }
  }

  function sendPayload() {
    const targetSocket = (cmdSocket && cmdSocket.readyState === WebSocket.OPEN)
      ? cmdSocket
      : (loggerSocket && loggerSocket.readyState === WebSocket.OPEN)
        ? loggerSocket
        : null;
    if (!targetSocket) {
      alert('No open channel. Connect a logger or the command channel first.');
      return;
    }
    const txt = els.payload.value.trim();
    if (!txt) { alert('Please enter payload JSON'); return; }

    // Try to pretty-validate JSON, but send original text if valid
    try {
      const obj = JSON.parse(txt);
      const pretty = JSON.stringify(obj);
      targetSocket.send(pretty);
      appendLine(`SENT: ${pretty}`);
    } catch {
      // Not valid JSON? still send raw to allow custom formats if needed
      targetSocket.send(txt);
      appendLine(`SENT (raw): ${txt}`);
    }
  }

  // Event bindings
  els.loggerToggleBtn.addEventListener('click', () => {
    const connected = els.loggerToggleBtn.dataset.state === 'connected';
    connected ? disconnectLogger() : connectLogger();
  });

  els.commandToggleBtn.addEventListener('click', () => {
    const connected = els.commandToggleBtn.dataset.state === 'connected';
    connected ? disconnectCmd() : connectCmd();
  });

  els.sendBtn.addEventListener('click', sendPayload);

  // Sensible defaults for quick testing
  // Do not prefill host; keep placeholder visible
  // Commands can be sent on any open channel (MessageLogger recommended) and use the MCU Topic schema
  els.payload.value = els.payload.value || '{"Topic":"/Gateway/Outputs","Number":0,"Value":true}';

  // Initialize send button disabled state
  updateSendBtn();
})();
