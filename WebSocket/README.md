# ROBA® gateway WebSocket documentation

## Table of contents

1. [Introduction](#introduction)
2. [Important information](#important-information)
3. [Setup](#setup)
4. [Connection Endpoints](#connection-endpoints)
5. [Message Documentation](#message-documentation)
6. [Application examples](#application-examples)

## Introduction

The gateway has a WebSocket-Server which is enabled by default. We use WebSockets over REST-API for data transfer because it reduces network traffic and it is fast and reliable.

So far we have only insecure WebSockets `ws://` implemented. Therefore the secure `wss://` connections are not supported.

For a detailed description of the WebSocket API please refer to the [Mozilla mdn web documentation](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).

## Important information

Some websocket features require authentication. The authentication can be done via REST-API or regular WebInterface Login-Page.

## Setup

The websocket server is enabled by default on the gateway. No further configuration is necessary.
Connections can be established via the URI `ws://hostname:81/` plus the logger type (see below). The default port is `81` and cannot be changed.  
The maximum number of clients/subscribers per WebSocket endpoint is limited to 2.  
For sending commands from the client to the gateway, it is necessary to first establish the connection to a logger (usally the `MessageLogger`).

## Connection Endpoints

### Message logger

Sends the Debug print messages and system status information in binary format. The output depends on the current Debug level.

URL: `ws://hostname:81/MessageLogger`  
Data type: `binary`

Every message contains a unix time stamp, a log level, the message source and the message itself like in the example below.

```bash
4068 [INF] [RBC.ReadConfig] Control Type = 0x20
4068 [INF] [RBC.ReadConfig] Configuration read successfully
4939 [INF] [OneWire] DS1820 sensor found
```

### Data logger

Sends application data whenever they are updated.

- [Cycle Data](../CommunicationSpec//RBC_Response_CycleData.md)
- [CurrentValues](../CommunicationSpec/RBC_Response_CycleData.md)
- [SensorData](../CommunicationSpec/Gateway_Response_OneWireData.md)
- [Inputs](../CommunicationSpec/Gateway_Response_Input.md)
- [Outputs](../CommunicationSpec/Gateway_Response_Output.md)
- [ConfigData](../CommunicationSpec/RBC_Response_Config.md)

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
        "MagneticReserve": 22.0,
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

## Message Documentation

For detailed information about the available WebSocket messages please refer to the [CommunicationSpec](../CommunicationSpec/README.md).

## Application examples

For fast getting started with WebSocket communication to the gateway we provide some application examples.

- [HTML Javascript example](Html_JavaScript/README.md)
- [NODE-RED](NODE-RED/README.md)

---

[Back to ROBA® gateway main page](../README.md)