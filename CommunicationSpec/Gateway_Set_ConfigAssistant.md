# Set Gateway Config Assistant

Saves the config assistant setting.

If the config assistant is enabled, it will start a WiFi Server which guides through the network connection after next reboot.

If disabled during runtime, the gateway performs a reset.

## Required service level

`Customer`

## Parameters

`<enabled>`

type: boolean

- true
- false

## Command

**REST-API**  
Request:

```bash
PUT {BaseURL}/Gateway/ConfigAssistant
```

Body:

```json
{"Value": <enabled>}
```

---
**MQTT**  
not applicable

---

**WebSocket**  
not applicable

## Response

**REST-API**  
[REST-API General Response](Gateway_Response_General.md#REST-API)

---

**MQTT**  
not applicable

---

**WebSocket**  
not applicable

---

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
