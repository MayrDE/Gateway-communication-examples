# Set Gateway Output

Sets a specific output of the gateway to high or low state.

## Required service level

`Customer`

## Parameters

`<channel>`

type: integer (uint8)

- 0: Output 0
- 1: Output 1

`<newValue>`
type: bool

- true
- false

`<newState>`
type: String

- "ON"
- "OFF"

## Command

**REST-API**  
Request:

```bash
PUT {BaseURL}/Gateway/Output/<channel>
```

Body:

```json
{"Value": <newValue>}
```

---

**MQTT**  
Topic:

```bash
{GatewayBaseTopic}/Outputs/<channel>/Set
```

Payload:

```text
`<newState>`
```

---

**WebSocket**  
Message:

```json
{
    "Topic": "/Gateway/Outputs",
    "Number": "<channel>",
    "Value": <newState>
}
```

## Response

**REST-API**  
[REST-API General Response](Gateway_Response_General.md#REST-API)

---

**MQTT**  
[MQTT General Response](Gateway_Response_General.md#MQTT)

---

**WebSocket**  
not applicable

---

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
