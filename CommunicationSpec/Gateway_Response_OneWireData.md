# Gateway OneWire Data Response

Provides OneWire sensor readings and connection info.

## Parameters

`<name>`  
Sensor name
type: String

`<temperature>`  
Temperature in °C  
type: float

`<humidity>`  
Relative humidity in %  
type: float

## REST-API

Response:

```bash
http Header with status code 200 OK
```

Body:  
type: JSON Object

```json
{
    "Name": "<name>",
    "Temperature": <temperature>,
    "Humidity": <humidity>
}
```

## MQTT

```bash
{GatewayBaseTopic}/Sensors/OneWire
```

Payload (example):
type: JSON Object

```json
{
    Name: "DS18B20"
    Temperature: 25.1125
    Humidity: 0
}
```

## WebSocket

Message

```json
{
    "Topic":"/Gateway/OneWire",
    "Name":"DS18B20",
    "Temperature":25.425,
    "Humidity":0
}
```

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
