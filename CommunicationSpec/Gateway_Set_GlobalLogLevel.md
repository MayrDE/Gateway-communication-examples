# Set Gateway Global Log Level

Updates the global log level of the gateway.

## Required service level

`Service`

## Parameters

`<level>`

type: integer (0..5)

- 0: Verbose
- 1: Debug
- 2: Information
- 3: Warning
- 4: Error
- 5: Fatal

## Command

**REST-API**  
Request:

```bash
PUT {BaseURL}/Gateway/GlobalLogLevel
```

Body:

```json
{"Value": <level>}
```

---

**MQTT**  
not applicable

---

**WebSocket**  
not applicable

---

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
