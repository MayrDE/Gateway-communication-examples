# ROBA®-Gateway WebSocket documentation

## Table of contents

1. [Introduction](#introduction)
2. [Important information](#important-information)
3. [Setup](#setup)
4. [Connection Endpoints](#connection-endpoints)
5. [Message Documentation](#message-documentation)
6. [Application examples](#application-examples)

## Introduction

The ROBA® Gateway has a WebSocket-Server which is enabled by default. We use WebSockets over REST-API or Modbus TCP for data transfer because it reduces network traffic and it is fast and reliable.

So far we have only insecure WebSockets `ws://` implemented. Therefore the secure `wss://` connections are not supported.

For a detailed description of the WebSocket API please refer to the [Mozilla mdn web documentation](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).

## Important information

Some websocket features require authentication. The authentication can be done via REST-API or regular WebInterface Login-Page.

## Setup

The websocket server is enabled by default on the ROBA® Gateway. No further configuration is necessary.
Connections can be established via the URI `ws://hostname:81/` plus the logger type (see below). The default port is `81` and cannot be changed.  
The maximum number of clients/subscribers per WebSocket endpoint is limited to 2.  
For sending commands from the client to the ROBA® Gateway, it is necessary to first establish the connection to a logger (usally the `MessageLogger`).

## Connection Endpoints

**Message logger**

Sends the Debug print messages and system status information in binary format. The output depends on the current Debug level.

URL: `ws://hostname:81/MessageLogger`  
Data type: `binary`

Every message contains a unix time stamp, a log level, the message source and the message itself like in the example below.

```bash
4068 [INF] [RBC.ReadConfig] Control Type = 0x20
4068 [INF] [RBC.ReadConfig] Configuration read successfully
4939 [INF] [OneWire] DS1820 sensor found
```

**Data logger**

Sends application data whenever they are updated.
- [Cycle Data](../MQTT/TopicDocumentation/Topics_RBC.md#cycle-data)
- [CurrentValues](../MQTT/TopicDocumentation/Topics_RBC.md#cycle-data)
- [SensorData](../MQTT/TopicDocumentation/Topics_RBC.md#cycle-data)
- [Inputs](../MQTT/TopicDocumentation/Topics_RBC.md#cycle-data)
- [Outputs](../MQTT/TopicDocumentation/Topics_RBC.md#cycle-data)
- [ConfigData](../MQTT/TopicDocumentation/Topics_RBC.md#cycle-data)
- [RBCConnectionData](../MQTT/TopicDocumentation/Topics_RBC.md#cycle-data)

URL: `ws://hostname:81/DataLogger`  
Data type: `JSON text`

Example:

```json
{
    "Topic": "/RBC/CycleData",
    "Value": {
        "Timestamp": 1769151088565,
        "OexcVoltage": 23.39321,
        "OexcCurrent": 1.545526,
        "HoldVoltage": 11.99983,
        "HoldCurrent": 0.782896,
        "PeakCutOff": 0,
        "Resistance": 15.32,
        "FluxReserve": 0.67,
        "CyclePower": 9.420719,
        "OexcTime": 0.27,
        "T11": 0.105,
        "T2": 0.061,
        "CycleOnTime": 25.678,
        "CycleOffTime": 68.505,
        "SignalStrength": 0.236,
        "ErrorCode": 16,
        "MPUTemp": 30
    }
}

{
    "Topic": "/RBC/CurrentValues",
    "Value": {
        "Connected": true,
        "Voltage": -0.005565,
        "Current": 0.004311,
        "State": 0,
        "ErrorCode": 16,
        "Error": true,
        "SlowFast": false,
        "Input": false,
        "Output": false,
        "Signal": false,
        "Start": false,
        "Warn": false
    }
}

{
    "Topic": "/Gateway/OneWire",
    "Name": "DS18B20",
    "Temperature": 23.625,
    "Humidity": 0
}
```

**Raw data logger**

TODO not clear if we keep this here.

Sends raw data of the ROBA® brake-checker® measurements, collected over TOSLINK interface.
This is a deep dive into the raw data stream and is intended for internal use only.


URL: `ws://hostname:81/RawDataLogger`  
Data type: `binary`

## Message Documentation

For detailed information about the available WebSocket messages please refer to the [WebSocket Message Documentation](Message_Documentation/Gateway_Messages.md).

## Application examples

For fast getting started with WebSocket communication to the ROBA® Gateway we provide some application examples.

- [HTML Javascript example](Html_JavaScript/README.md)
- [NODE-RED](NODE-RED/README.md)
