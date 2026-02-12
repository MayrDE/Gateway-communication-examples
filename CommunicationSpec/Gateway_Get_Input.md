# Get Gateway Input

Gets the state of a gateway input channel.

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
GET {BaseURL}/Gateway/Input/<channel>
```

Body: none

---

**MQTT**  
No request necessary, input state is published automatically on change

---

**WebSocket**  
No request necessary, input state is published automatically on change

## Response

**REST-API**  
[REST-API Response Input](Gateway_Response_Input.md#REST-API)

---

**MQTT**  
[MQTT Response Input](Gateway_Response_Input.md#MQTT)

---

**WebSocket**  
[WebSocket Response Input](Gateway_Response_Input.md#WebSocket)

---

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
