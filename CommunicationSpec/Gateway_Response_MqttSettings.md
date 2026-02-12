# Gateway MQTT Settings Response

Provides the current MQTT settings of the gateway.

## Parameters

For detailed description of the parameters see [Set Gateway MQTT Settings](Gateway_Set_MqttSettings.md#parameters).

## REST-API

Response:

```bash
http Header with status code 200 OK
```

Body (example):
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

## MQTT

not applicable

## WebSocket

not applicable

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
