# Gateway Network Response

Provides the gateway network settings.

## Parameters

For detailed description of the parameters see [Set Gateway Network](Gateway_Set_Network.md#parameters).

## REST-API

Response:

```bash
http Header with status code 200 OK
```

Body (example):  
type: JSON Object

```json
{
    "hostname": "gateway-001",
    "NetworkType": 2,
    "dynamicIp": "192.168.1.50",
    "dynamicSubnetMask": "255.255.255.0",
    "dynamicGateway": "192.168.1.1",
    "dynamicDNS1": "8.8.8.8",
    "dynamicDNS2": "1.1.1.1",
    "StaticIP": {
        "StaticIPAddress": "192.168.1.10",
        "StaticSubnet": "255.255.255.0",
        "StaticGateway": "192.168.1.1",
        "StaticDNS1": "8.8.8.8",
        "StaticDNS2": "1.1.1.1"
    },
    "NtpSettings": {
        "Enabled": true,
        "Server": "pool.ntp.org"
    }
}
```

## MQTT

not applicable

## WebSocket

not applicable

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
