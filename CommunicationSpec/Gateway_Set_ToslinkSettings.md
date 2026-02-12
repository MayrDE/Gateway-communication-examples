# Set Gateway Toslink Settings

Enables or disables the Toslink settings of the gateway.
This requires special hardware and is intended only for internal use.

## Required service level

`Service`

## Parameters

`<enabled>`

type: boolean

- true
- false

## Command

**REST-API**  
Request:

```bash
PUT {BaseURL}/Gateway/ToslinkSettings
```

Body:

```json
{
    "Toslink": {
        "Enabled": <enabled>  
    }
}
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
