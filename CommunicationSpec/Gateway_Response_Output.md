# Gateway Output Response

Provides the gateway output state for a given channel.

## Parameters

For detailed description of the parameters see [Set Gateway Output](Gateway_Set_Output.md#parameters).

## REST-API

Response:

```bash
http Header with status code 200 OK
```

Body (example):  
type: JSON Object

```json
{
    "Value": false
}
```

## MQTT

Topic:

```bash
{GatewayBaseTopic}/Outputs/<channel>
```

Payload (example):
type: plain text

```bash
"OFF"
```

## WebSocket

not applicable

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
