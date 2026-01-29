# MQTT Interface Documentation

## Table of Contents

1. [Introduction](#introduction)
1. [Important information](#important-information)
1. [MQTT Settings in ROBA® Gateway](#mqtt-settings-in-roba-gateway)
1. [Topic Documentation](#topic-documentation)
1. [Application Examples](#application-examples)

## Introduction

MQTT is a lightweight messaging protocol. It has an pub/sub architecture that is ideal for IoT applications. This means that a client can publish messages to a topic, and other clients can subscribe to that topic to receive those messages. All messages from the client are sent to an MQTT broker, which is responsible for distributing the messages to the appropriate subscribers.

The ROBA® Gateway supports MQTT communication, allowing it to publish data and configure the device. 
In the following sections the documentation is often divided into topics for ROBA® gateway and topics for ROBA® brake-checker®. However the only device with a physical MQTT interface is the ROBA® gateway. The ROBA® brake-checker® is connected to the ROBA® gateway via IrDa interface and the ROBA® gateway translates the MQTT requests.

For quick testing several application examples are provided in this directory.

## Important information

Not all features of the ROBA®-Gateway are available via MQTT yet. Some features may only be available in future firmware versions.

## MQTT Settings in ROBA® Gateway

The MQTT settings can be found in the ROBA® Gateway web interface under NETWORK->MQTT.

![MQTT Settings Screenshot](/MQTT/Assets/00_GeneralMQTTSettings.png)

### Enable MQTT

Enables/disables the MQTT connection

### Broker

Hostname or IP address of the MQTT broker to which the ROBA® Gateway should connect.

### Port

Port number of the MQTT broker. The default port for MQTT is 1883.

### Topic Prefix

If you want to operate multiple devices within the same broker, you can use a topic prefix in order to create groups. This prefix will be added to all topics published by the ROBA® Gateway. For example, if you set the topic prefix to `machine_1`, all topics will be prefixed with this string in the highest layer. If the topic prefix is left empty, no prefix will be added.

This feature can be useful, if you have installed several ROBA® Gateway devices in one application and want to listen to all of them by just subscribing to `machine_1/#`.

### Discovery Base Topic

The ROBA® Gateway supports [MQTT Discovery](https://www.home-assistant.io/integrations/mqtt/#mqtt-discovery) developed by Home Assistant. It basically allows automatic detection of the ROBA® Gateway and its connected ROBA® brake-checker® and their MQTT capabilities respectively. Based on this information, Home Assistant automatically creates a GUI. The `Discovery Base Topic` has to match the discovery prefix configured in Home Assistant (usually `homeassistant/device`).

The MQTT Discovery feature is always on, even if no Discovery base topic is defined. Once the ROBA® Gateway connects successfully to the MQTT broker, it will publish its discovery messages.

Please refer to [Home Assistant documentation](https://www.home-assistant.io/integrations/mqtt/#configuration-via-mqtt-discovery) for more information on how to use MQTT Discovery.

### User and Password

Username and password, if there is the need for authenticating with the MQTT broker.

> ATTENTION!:
Even if the broker does not use any authentication, you have to enter a username and password, otherwise the ROBA® Gateway won't connect. You can use any values (e.g. Username: "user", Password "password" in this case.

## Topic Documentation

For detailed information about the available MQTT topics and their payloads, please refer to the [ROBA® Gateway MQTT Topics Documentation](TopicDocumentation/)

## Application examples

For fast getting started with the MQTT-Interface of the ROBA®-Gateway several applications examples are provided in this directory:

- [Node-RED with Aedes MQTT broker](nodered/README.md)
- [Standalone Mosquitto MQTT broker](Mosquitto/README.md)
- [Home Assistant Autodiscovery](../MQTT/HomeAssistant/README.md)

### ROBA® Gateway MQTT Settings for the examples

- Enable MQTT: checked
- Broker: IP address or hostname of the MQTT broker used in the example e.g. `192.168.200.220`
- Port: used port for MQTT usually `1883`
- Topic Prefix: not necessary for the examples, could be left empty
- Discovery Base Topic: `discover/device`
- User: mqtt broker username if authentication is used, for Home Assistant use the credentials of a Home Assistant user with Administrator or Owner role
- Password: mqtt broker password if authentication is used, for Home Assistant use the credentials of a Home Assistant user with Administrator or Owner role

> ATTENTION!
> After changing the MQTT settings, please restart the ROBA® Gateway to apply the new settings and establish a MQTT connection.

---

[Back to ROBA® Gateway main page](../README.md)

