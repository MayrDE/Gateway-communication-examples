# getGatewayMqttSettings

Get the actual MQTT settings from the gateway.

## Path

/Gateway/MqttSettings

## Required service level

`none`

## Body

`none`

## Response

`200 OK` (MqttSettings)

### Example

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