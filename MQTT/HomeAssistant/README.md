# Home Assistant Integration via MQTT

## Table of Contents

1. [Introduction](#introduction)
1. [Supported Versions](#supported-versions)
1. [Setup](#setup)
1. [Testing autodiscovery](#testing-autodiscovery)
1. [Limits of the example](#limits-of-the-example)

## Introduction

Home Assistant is an open-source home automation platform that focuses on privacy and local control. It allows you to control smart devices, automate tasks, and monitor your home environment through a user-friendly interface. Home Assistant supports MQTT Discovery, which enables automatic detection and configuration of the gateway and its connected brake-checker.

## Supported Versions

This documentation was created using the following versions. It may work with other  versions, but this is not guaranteed.

<!-- markdownlint-disable MD033-->
| Module                | Version                                                                                        |
|:--------------        |:------------                                                                                   |
| Home Assistant        | <p>Core 2024.12.0<br>Supervisor 2024.11.4 <br>Operatingsystem 14.0<br>Frontend 20241127.4 </p> |
| ROBA® gateway FW      | `1.0.0`                                                                                        |
| ROBA® gateway FS      | `1.0.0`                                                                                        |
| ROBA® brake-checker®  | `4.0.0`                                                                                        |
<!-- markdownlint-enable MD033-->

## Setup

Connect your gateway with your local network over a router.

![Connection](../Assets/17_HomeassistantConnection.png)

### Setup the Home Assistant

Configure the Home Assistant for MQTT service. Follow the official [Home Assistant documentation](https://www.home-assistant.io/integrations/mqtt).

Check your MQTT broker settings in Home Assistant (Settings -> Devices & Services -> MQTT -> Configure -> RE-CONFIGURE MQTT).
Following settings should be used:

- Port: `1883`
- Enable discovery: `ON`
- Discovery prefix: `discovery`

You don't have to change Password and username. Home Assistant creates its own user for MQTT communication.

### Setup the ROBA® gateway (MQTT Client)

Configure the gateway MQTT settings in the web interface like described in [MQTT Settings in ROBA® gateway](../README.md#roba-gateway-mqtt-settings-for-the-examples).

If everything is set up correctly, the gateway should now connect to the MQTT broker.

## Testing Autodiscovery

Go to "Overview" in Home Assistant. Restart the gateway to force re-publishing of the discovery messages.
After a short moment, the gateway and the connected brake-checker should appear automatically in the overview.

![Home Assistant Overview](../Assets/08_AutomaticUI.png)

>ATTENTION:  
> The following example will set Output 0 of the gateway to ON state.  
> Please ensure that nothing is connected electrically to Output 0 that could be damaged by this action.

Click on OUT1 On/Off button to toggle Output 0 of the gateway.

## Limits of the example

This example is intended to demonstrate the basic functionality of Home Assistant integration via MQTT Discovery. It does not cover all possible configurations or use cases.

---

[Back to ROBA® gateway main page](../../README.md) | [Back to MQTT overview](../README.md)
