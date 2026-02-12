# REST-API documentation

## Table of contents

1. [Introduction](#introduction)
2. [Important information](#important-information)
3. [Request Documentation](#request-documentation)
4. [Application examples](#application-examples)

## Introduction

For testing the gateway REST-API interface, several application examples are provided in this directory. There are examples available for Bruno API client, cURL command line and Node-RED applications.
In the following sections the REST-API requests are often divided into requests for gateway and requests for brake-checker. However the only device with a REST-API interface is the gateway. The brake-checker is connected to the gateway via IrDa interface and the gateway translates the REST-API requests.

## Important information

All `PUT` commands take effect immediately after sending the request and receiving a successful response. They can be send at any time, as long as the device is powered.
New configurations are stored permanently and available even after a restart of the gateway or power cycle.

Exceptions for non-permanent configurations are:

- `/Gateway/Output/0`
- `/Gateway/Output/1`
- `/Gateway/Restart`

## Request Documentation

All available requests with detailed documentation can be found in the [CommunicationSpec](../CommunicationSpec/README.md).
All REST-API requests are also documented in the [openapi.yaml](openapi.yaml) provided in this directory. The YAML file can be imported into various other REST-API clients as well.

## Application examples

For testing and using the gateway REST-API interface in an easy and conveniant way, several application examples are provided in this directory:

- [Bruno Opensource API client example](Bruno/README.md)
- [cURL command line examples](cURL/README.md)
- [Node-RED examples](Node-RED/README.md)

---

[Back to ROBA® gateway main page](../README.md)
