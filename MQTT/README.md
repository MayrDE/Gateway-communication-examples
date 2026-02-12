# MQTT Interface Documentation

## Table of Contents

1. [Introduction](#introduction)
1. [Important information](#important-information)
1. [MQTT Settings in ROBA® gateway](#mqtt-settings-in-roba-gateway)
1. [Topic Documentation](#topic-documentation)
1. [Application Examples](#application-examples)

## Introduction

MQTT is a lightweight messaging protocol. It has an pub/sub architecture that is ideal for IoT applications. This means that a client can publish messages to a topic, and other clients can subscribe to that topic to receive those messages. All messages from the client are sent to an MQTT broker, which is responsible for distributing the messages to the appropriate subscribers.

The gateway supports MQTT communication, allowing it to publish data and configure the device.
In the following sections the documentation is often divided into topics for gateway and topics for brake-checker. However the only device with a physical MQTT interface is the gateway. The brake-checker is connected to the gateway via IrDa interface and the gateway translates the MQTT requests.

For quick testing several application examples are provided in this directory.

## Important information

Not all features of the gateway are available via MQTT yet. Some features may only be available in future firmware versions.

## MQTT Settings in ROBA® gateway

The MQTT settings can be found in the gateway web interface under NETWORK->MQTT.

![MQTT Settings Screenshot](/MQTT/Assets/00_GeneralMQTTSettings.png)

### Enable MQTT

Enables/disables the MQTT connection

### Broker

Hostname or IP address of the MQTT broker to which the gateway should connect.

### Port

Port number of the MQTT broker. The default port for MQTT is 1883.

### Topic Prefix

If you want to operate multiple devices within the same broker, you can use a topic prefix in order to create groups. This prefix will be added to all topics published by the gateway. For example, if you set the topic prefix to `machine_1`, all topics will be prefixed with this string in the highest layer. If the topic prefix is left empty, no prefix will be added.

This feature can be useful, if you have installed several gateway devices in one application and want to listen to all of them by just subscribing to `machine_1/#`.

### Discovery Base Topic

The gateway supports [MQTT Discovery](https://www.home-assistant.io/integrations/mqtt/#mqtt-discovery) developed by Home Assistant. It basically allows automatic detection of the gateway and its connected brake-checker and their MQTT capabilities respectively. Based on this information, Home Assistant automatically creates a GUI. The `Discovery Base Topic` has to match the discovery prefix configured in Home Assistant (usually `homeassistant/device`).

The MQTT Discovery feature is always on, even if no Discovery base topic is defined. Once the gateway connects successfully to the MQTT broker, it will publish its discovery messages.

Please refer to [Home Assistant documentation](https://www.home-assistant.io/integrations/mqtt/#configuration-via-mqtt-discovery) for more information on how to use MQTT Discovery.

### User and Password

Username and password, if there is the need for authenticating with the MQTT broker.

> ATTENTION!:
Even if the broker does not use any authentication, you have to enter a username and password, otherwise the gateway won't connect. You can use any values (e.g. Username: "user", Password "password" in this case.

## Topic Documentation

 The regular topic structure used by the gateway in combination with a brake-checker is build from several parts:

 `[<topic_prefix>/]<device_identifier>/<serial_number>/<topic_specification>`

### topic_prefix

optional

 This is a optional part set in the gateway MQTT settings. Default is empty.

 Example if topic prefix is defined in MQTT settings: `machine_1/Gateway/2521D00163/Outputs/0/Set`

if not: `Gateway/2521D00163/Outputs/0/Set`

### device_identifier

This part controls wether the topic is related to the gateway itself or to a connected brake-checker. It can be `Gateway` or `RBC` respectively.

### serial_number

Each gateway and brake-checker has a unique serial number. This part of the topic is used to identify the specific device the topic is related to. It is important when multiple devices are used in one MQTT broker. Typical serial numbers look like `2521D00163` or `2521B00045` and can be found on the device label.

### topic_specification

This part specifies the actual topic function, e.g. `Inputs/0` for  state of input 0, `Outputs/1/Set` for setting output 1 , `Config/Set` for setting configuration of the RBC etc. It can consist of one or multiple levels separated by `/`.

For detailed information about the available MQTT topics and their payloads, please refer to the [CommunicationSpec](../CommunicationSpec/README.md).

## Device Discovery Topics

The gateway supports MQTT device discovery for integration in home automation systems like Home Assistant. They will be sent automatically by the device, once it is connected to a MQTT server. The discovery topics are structured as follows:

`<discovery_base_topic>/device/<serial_number>/config`

- **Discovery Base Topic**
This part is configurable in the gateway MQTT settings. It has to match the discovery prefix configured in Home Assistant.

- **Serial Number**
This part contains the serial number of the gateway or brake-checker respectively. It is assigned automatically.

## Application examples

For fast getting started with the MQTT-Interface of the gateway several applications examples are provided in this directory:

- [Node-RED with Aedes MQTT broker](nodered/README.md)
- [Standalone Mosquitto MQTT broker](Mosquitto/README.md)
- [Home Assistant Autodiscovery](../MQTT/HomeAssistant/README.md)

### ROBA® gateway MQTT Settings for the examples

- Enable MQTT: checked
- Broker: IP address or hostname of the MQTT broker used in the example e.g. `192.168.200.220`
- Port: used port for MQTT usually `1883`
- Topic Prefix: not necessary for the examples, could be left empty
- Discovery Base Topic: `discover/device`
- User: mqtt broker username if authentication is used, for Home Assistant use the credentials of a Home Assistant user with Administrator or Owner role
- Password: mqtt broker password if authentication is used, for Home Assistant use the credentials of a Home Assistant user with Administrator or Owner role

> ATTENTION!
> After changing the MQTT settings, please restart the gateway to apply the new settings and establish a MQTT connection.

---

[Back to ROBA® gateway main page](../README.md)
