# Gateway Version Response

Provides the gateway hardware and software versions.

## Parameters

`<hwVersion>`  
Hardware version  
type: String

`<swVersion>`  
Software version  
type: String

## REST-API

Response:

```bash
http Header with status code 200 OK
```

Body (example):  
type: JSON Object

```json
{
    "HwVersion": "0.1.0.0",
    "SwVersion": "1.0.5"
}
```

## MQTT

not applicable

## WebSocket

not applicable

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
