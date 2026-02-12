# Set Gateway Network

Sets Gateway network settings. They will be applied after a reboot.

## Required service level

`Service`

## Parameters

`<NetworkSettings>`  
type: JSON Object

```json
{
    "hostname": "<name>",
    "NetworkType": <type>,
    "StaticIP": {
        "StaticIPAddress": "<ip>",
        "StaticSubnet": "<subnet>",
        "StaticGateway": "<gateway>",
        "StaticDNS1": "<dns1>",
        "StaticDNS2": "<dns2>"
    },
    "NtpSettings": {
        "Enabled": <enabled>,
        "Server": "<ntpServer>"
    }
}
```

`<name>`  
type: string

- e.g. "gateway-001"

`<type>`  
type: integer (enum)

- 1: Static IP
- 2: DHCP Client

`<ip>`  
type: string (IPv4)

- e.g. "192.168.1.10"

`<subnet>`  
type: string (IPv4 subnet mask)

- e.g. "255.255.255.0"

`<gateway>`  
type: string (IPv4)

- e.g. "192.168.1.1"

`<dns1>`  
type: string (IPv4)

- e.g. "8.8.8.8"

`<dns2>`  
type: string (IPv4)
Optional, could be left empty

- e.g. "1.1.1.1"

`<enabled>`  
type: boolean

- true: enables time synchronization via Network Time Protocol (NTP)
- false: disables it

`<ntpServer>`  
type: string
Optional, could be left empty if disabled

- e.g. "pool.ntp.org"

## Command

**REST-API**  
Request:

```bash
PUT {BaseURL}/Gateway/Network
```

Body (example):

```json
{
  "hostname": "gateway-001",
  "NetworkType": 1,
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

---

**MQTT**  
not applicable

---

**WebSocket**  
not applicable

## Response

**REST-API**  
[REST-API General Response](Gateway_Response_General.md#REST-API)

---

**MQTT**  
not applicable

---

**WebSocket**  
not applicable

---

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
