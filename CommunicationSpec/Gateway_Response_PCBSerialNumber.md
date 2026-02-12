# Gateway PCB Serial Number Response

Provides the gateway PCB serial number.

## Parameters

`<value>`  
PCB serial number of the gateway.  
type: String

- e.g. "00008"

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
