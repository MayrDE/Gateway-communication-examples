# Set Gateway Restart

Restarts the gateway.

## Required service level

`Customer`

## Parameters

none

## Command

**REST-API**  
Request:

```bash
PUT {BaseURL}/Gateway/Restart
```

Body: none

---

**MQTT**  
Topic:

```bash
{GatewayBaseTopic}/Reset
```

Payload: none

---

**WebSocket**  
Message:

```json
{
    "Topic": "/Gateway/Restart",
}
```

## Response

**REST-API**  
[REST-API General Response](Gateway_Response_General.md#REST-API)

---

**MQTT**  
[MQTT General Response](Gateway_Response_General.md#MQTT)

---

**WebSocket**  
none

---

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
