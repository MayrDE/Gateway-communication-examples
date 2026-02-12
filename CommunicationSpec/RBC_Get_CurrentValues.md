# Get RBC CurrentValues

Gets the current values of the RBC like voltage, current etc.

## Required service level

`none`

## Command

**REST-API**  
Request:

```bash
GET {BaseURL}/RBC/CurrentValues
```

Body: none

---

**MQTT**  
No request necessary, response is published automatically on current value change.

---

**WebSocket**  
No request necessary, response is sent automatically on current value change.

## Response

**REST-API**  
[REST-API Response RBC CurrentValues](RBC_Response_CurrentValues.md#REST-API)

---

**MQTT**  
[MQTT Response RBC CurrentValues](RBC_Response_CurrentValues.md#MQTT)

---

**WebSocket**  
[WebSocket Response RBC CurrentValues](RBC_Response_CurrentValues.md#WebSocket)

---

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
