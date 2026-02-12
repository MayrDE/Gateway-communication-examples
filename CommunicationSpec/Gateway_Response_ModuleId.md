# Gateway ModuleId Response

Provides the gateway MAC adress.

## Parameters

`<moduleId>`  
MAC address of the gateway  
type: String

- e.g. "DC8AC9AB4C24"

## REST-API

Response:

```bash
http Header with status code 200 OK
```

Body (example):
type: JSON Object

```json
{
    "ModuleId": <moduleId>
}
```

## MQTT

not applicable

## WebSocket

not applicable

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
