# ROBA®-Gateway cURL description

## Table of contents

1. [Introduction](#introduction)
1. [Supported Versions](#supported-versions)
1. [Preparation](#preparation)
1. [Userlevel](#user-level)
1. [GET Example](#get-example)
1. [PUT Example](#put-example)

## Introduction

This document describes the usage of cURL commands for the ROBA®-Gateway REST-API.

All commands are available for Unix and Windows command line.

## Supported Versions

This documentation was created using the following versions. It may work with other  versions, but this is not guaranteed. 

| Module                | Version           |
|:--------------        |:------------------|
| cURL                  | `8.8.0` or higher |
| ROBA®-Gateway FW      | `1.0.0` or higher |
| ROBA®-Gateway FS      | `1.0.0` or higher |
| ROBA® brake-checker   | `4.0.0` or higher |

## Preparation

To make these requests a little bit easier we suggest using a temporary variable in the command line. This will allow you to copy and paste the requests directly into the command line without changing the Uri (destination/gateway address) for each request.

If you don't want to use a temporary variable, you can replace all the variables in this document by the ROBA®-Gateway Uri.

> This works only when the ROBA®-Gateway was configured as a DHCP client and received an IP address from the network DHCP server, which resolves the hostname. If you are not using DHCP, but static IP, please replace the hostname e.g.`gateway-2521d00163` with the actual static IP address of your ROBA®-Gateway (default: `192.168.4.2`).

>Please note that the Windows command line syntax **does not** work in the Windows PowerShell.

### Set a temporary variable for the session

Unix:

```bash
GATEWAY_ADDR=http://gateway-2521d00163
```

Windows:

```bash
set GATEWAY_ADDR=http://gateway-2521d00163
```

### Check if the variable has been set

Unix:

```bash
echo $GATEWAY_ADDR
```

Windows:

```bash
echo %GATEWAY_ADDR%
```

#### The output should be

```bash
http://gateway-2521d00163
```

## User Level

For certain requests a specific service level is required. Please refer to the [RequestDocumentation](../RequestDocumentation/) for details on specific REST-API requests.

To unlock the required service level, you need to provide the appropriate password within the curl command. This is done by adding following parameters to the curl command:

```bash
--user "username:password"
```

The password of the `Customer` and `Service` user level can be generated as described in the [Password generation](../../README.md#password-generation) section of the main documentation.


## GET Example

### `GET` `/Gateway/getGatewayId`

Get the gateway identification with Serial Number and Item Number. No user level is required.

Unix:

```bash
curl -X 'GET' $GATEWAY_ADDR'/Gateway/Id' -H 'accept: */*' -H 'Content-Type: application/json'
```

Windows

```bash
curl -X "GET" "%GATEWAY_ADDR%/Gateway/Id" -H "accept: */*" -H "Content-Type: application/json"
```

Example response:

```json
{
  "SerialNumber": "2521D00163",
  "ItemNumber": "8307763"
}
```

---

## PUT Example

### `PUT` `/Gateway/Output/0`

Sets the gateway output channel 0 to high (true). `Customer` user level is required. For details see also [putGatewayOutput.md](../RequestDocumentation/Gateway/putGatewayOutput.md).

> ATTENTION!
>
> This request will switch the output. Before proceeding, please make sure that **no** output is is connected electrically.

Unix:

```bash
curl --user 'Customer:kx2521D00163!' -i -X 'PUT' $GATEWAY_ADDR'/Gateway/Output/0' -H 'accept: */*' -H 'Content-Type: application/json' -d '{"Value": true}'
```

Windows

```bash
curl --user "Customer:kx2521D00163!" -i -X "PUT" "%GATEWAY_ADDR%/Gateway/Output/0" -H "accept: */*" -H "Content-Type: application/json"  -d "{\"Value\": true}"
```

Example response:

```bash
HTTP/1.1 204 No Content
Content-Type: text/plain
Content-Length: 0
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Headers: *
Connection: close
```


---

[Back to REST-API overview](../README.md)
