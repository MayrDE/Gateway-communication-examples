# Gateway Uptime Response

Provides the gateway uptime in seconds.

## Parameters

`<value>`  
Gateway uptime in seconds  
type: uint32

- e.g. 1234

## REST-API

Response:

```bash
http Header with status code 200 OK
```

Body (example):  
type: JSON Object

```json
{
    "Value": <value>  
}
```

## MQTT

not applicable

## WebSocket

not applicable

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
