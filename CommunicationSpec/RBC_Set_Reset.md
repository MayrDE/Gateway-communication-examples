# Set RBC Reset

Reset the ROBA brake-checker (RBC).

## Required service level

`Customer`

## Parameters

none

## Command

**REST-API**  
Request:

```bash
PUT {BaseURL}/RBC/Reset
```

Body: none

---

**MQTT**  
Topic:

```bash
{RBCBaseTopic}/Reset
```

Payload: none  

---

**WebSocket**  
not applicable

## Response

**REST-API**  
[REST-API General Response](Gateway_Response_General.md#REST-API)

---

**MQTT**  
[MQTT General Response](Gateway_Response_General.md#MQTT)

---

**WebSocket**  
not applicable

---

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
