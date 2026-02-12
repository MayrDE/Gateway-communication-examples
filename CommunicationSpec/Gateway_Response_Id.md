# Gateway Id Response

Provides the gateway item and serial number.

## Parameters

`<serialNumber>`  
The serial number of the gateway.
type: String

`<itemNumber>`
The item number of the gateway.
type: String

## REST-API

Response:

```bash
http Header with status code 200 OK
```

Body:
type: JSON Object

```json
{
    "SerialNumber": "<serialNumber>",
    "ItemNumber": "<itemNumber>"
}
```

## MQTT

not applicable

## WebSocket

not applicable

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
