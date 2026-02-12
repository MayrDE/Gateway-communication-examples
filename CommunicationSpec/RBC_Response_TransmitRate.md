# RBC Transmit Rate Response

Provides the current RBC transmit rate value in milliseconds.
For internal use only.

## Parameters

`<value>`  
Transmit rate in milliseconds.
type: Integer (0..65535)

## REST-API

Response:

```bash
http Header with status code 200 OK
```

Body (example):
type: JSON Object

```json
{
    "Value": 100
}
```

## MQTT

not applicable

## WebSocket

not applicable

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
