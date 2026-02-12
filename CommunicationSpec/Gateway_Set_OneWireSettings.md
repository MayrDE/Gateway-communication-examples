# Set Gateway OneWire Settings

Set the one wire settings for connected sensors.
The settings will be applied immediately and stored permanently.

## Required service level

`Service`

## Parameters

type: JSON Object

```json
{
    "OneWire": {
        "Enabled": <enabled>,
        "TempOffset": <tempOffset>,
        "HumOffset": <humOffset>
    }
}
```

`<enabled>`
type: boolean

- true: OneWire is enabled
- false: OneWire is disabled

`<tempOffset>`
type: float

- Temperature offset in °C, e.g. 0.5 or -1.2

`<humOffset>`
type: float

- Humidity offset in %, e.g. 2.0 or -3.5

## Command

**REST-API**  
Request:

```bash
PUT {BaseURL}/Gateway/OneWireSettings
```

Body (example):

```json
{
    "OneWire": {
        "Enabled": true,
        "TempOffset": 0.5,
        "HumOffset": -0.2
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
