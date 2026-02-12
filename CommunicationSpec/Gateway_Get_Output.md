# Get Gateway Output

Gets the state of a gateway output channel.

## Required service level

`none`

## Parameters

`<channel>`

- type: integer (uint8)
- minimum: 0
- maximum: 1

## Command

**REST-API**  
Request:

```bash
GET {BaseURL}/Gateway/Output/<channel>
```

Body: none

---

**MQTT**  
No request necessary, output state is published automatically on change

---

**WebSocket**  
No request necessary, output state is sent automatically on change

## Response

**REST-API**  
[REST-API Response Output](Gateway_Response_Output.md#REST-API)

---

**MQTT**  
[MQTT Response Output](Gateway_Response_Output.md#MQTT)

---

**WebSocket**  
[WebSocket Response Output](Gateway_Response_Output.md#WebSocket)

---

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
