# Gateway Confirm Response

Confirms a RBC_Set_Config command, with corresponding errorCode

## Parameters

`<moduleId>`
type: string
Serial number of the Gateway module.

`<error>`
type: uint8 (enum)

- `0`: Success
- `1`: General error, config not applied

## REST-API

not applicable

## MQTT

Topic:

```bash
{GatewayBaseTopic}/Config/confirm
```

Payload (example):
type: JSON Object

```json
{
    "error": <error>,
    "module_id": "<moduleId>"
}
```

## WebSocket

not applicable

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
