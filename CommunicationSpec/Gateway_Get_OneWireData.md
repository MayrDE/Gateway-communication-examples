# Get Gateway OneWire Data

Gets OneWire sensor readings and connection info.

## Required service level

`none`

## Command

**REST-API**  
Request:

```bash
GET {BaseURL}/Gateway/OneWireData
```

Body: none

---

**MQTT**  
No request necessary, OneWire data is published automatically on change

---

**WebSocket**  
No request necessary, OneWire data is sent automatically on change

## Response

**REST-API**  
[REST-API Response OneWire Data](Gateway_Response_OneWireData.md#REST-API)

---

**MQTT**  
[MQTT Response OneWire Data](Gateway_Response_OneWireData.md#MQTT)

---

**WebSocket**  
[WebSocket Response OneWire Data](Gateway_Response_OneWireData.md#WebSocket)

---

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
