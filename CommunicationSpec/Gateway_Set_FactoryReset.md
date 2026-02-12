# Set Gateway Factory Reset

Performs a factory reset to restore the gateway to its default settings.

## Required service level

`Service`

## Parameters

none

## Command

**REST-API**  
Request:

```bash
PUT {BaseURL}/Gateway/FactoryReset
```

Body: none

---

**MQTT**  
not applicable

---

**WebSocket**  
Message:

```json
{
    "Topic": "/Gateway/FactoryReset",
}
```

## Response

**REST-API**  
[REST-API General Response](Gateway_Response_General.md#REST-API)

---

**MQTT**  
not applicable

---

**WebSocket**  
none

---

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
