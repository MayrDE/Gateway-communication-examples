# putGatewayMqttSettings

Set the new MQTT settings for the gateway.

## Path

/Gateway/MqttSettings

## Required service level

`Service`

## Body

`MqttSettings`

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

## Response

`204 No Content`

or

`400 Bad Request`

or

`401 Not Authorized`