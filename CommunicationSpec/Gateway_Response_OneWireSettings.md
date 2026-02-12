# Gateway OneWire Settings Response

Provides the OneWire settings of the gateway.

## Parameters

For detailed description of the parameters see [Set Gateway OneWire Settings](Gateway_Set_OneWireSettings.md#parameters).

## REST-API

Response:

```bash
http Header with status code 200 OK
```

Body (example):  
type: JSON Object

```json
{
    "OneWire": {
        "Enabled": true,
        "TempOffset": 0.0,
        "HumOffset": 0.0
    }
}
```

## MQTT

not applicable

## WebSocket

not applicable

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
