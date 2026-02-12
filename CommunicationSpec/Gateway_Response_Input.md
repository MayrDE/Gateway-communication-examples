# Gateway Input Response

Provides the gateway input state for a given channel.

## Parameters

`<channel>`

type: integer (uint8)

- 0: Input 0
- 1: Input 1

`<value>`  
Current input vale.  
type: bool

- true
- false

`<state>`
Current input state.
type: string

- "ON"
- "OFF"

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

Topic:

```bash
{GatewayBaseTopic}/Inputs/<channel>
```

Payload

```text
`<state>`
```

## WebSocket

Message

```json
{
    "Topic":"/Gateway/Inputs",
    "Number":<channel>,
    "Value":<value>
}
```

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
