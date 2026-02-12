# Set Gateway MQTT Settings

Set the MQTT settings for the gateway.

## Required service level

`Service`

## Parameters

`<MQTTSettings>`  
type: JSON Object

```json
{
    "Mqtt": {
        "Enabled": <enabled>,
        "Broker": <broker>,
        "Port": <port>,
        "Topic": <baseTopic>,
        "DiscoTopic": <discoveryTopic>,
        "Username": <userName>,
        "Password": <brokerPassword>
    }
}
```

`<enabled>`
type: boolean

- true
- false

`<broker>`
type: string

- e.g. "mqtt.local"

`<port>`
type: integer (uint16)

- e.g. 1883 (default MQTT port)

`<baseTopic>`
type: string
Optional, could be left empty

- e.g. ""  
- e.g. "mayrs"

`<discoveryTopic>`
type: string
Optional, could be left empty

- e.g. ""  
- e.g. "homeassistant/device"

`<userName>`
type: string
Optional, could be left empty if no authentication is used in broker

- e.g. ""  
- e.g. "user"

`<brokerPassword>`
type: string
Optional, could be left empty if no authentication is used in broker

- e.g. ""  
- e.g. "password"

## Command

**REST-API**  
Request:

```bash
PUT {BaseURL}/Gateway/MqttSettings
```

Body (example):

```json
{
    "Mqtt": {
        "Enabled": true,
        "Broker": "mqtt.local",
        "Port": 1883,
        "Topic": "roba/gateway",
        "DiscoTopic": "homeassistant",
        "Username": "user",
        "Password": "pass"
    }
}
```

---

**MQTT**  
not applicable

---

**WebSocket**  
not applicable

## Response

**REST-API**  
[REST-API General Response](Gateway_Response_General.md#REST-API)

---

**MQTT**  
not applicable

---

**WebSocket**  
not applicable

---

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
