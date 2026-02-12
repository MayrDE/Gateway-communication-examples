# RBC Info Response

Provides the RBC device information and identity.

## Parameters

`<connected>`  
Connection status to the RBC.
type: Boolean

- e.g. true

`<name>`  
Product name.
type: String

- e.g. "RBC Plus DC 24V"

`<type>`  
RBC type identifier.
type: String

- e.g. "058.600.2"

`<serialNumber>`  
Device serial number.
type: String

- e.g. "2450D00013"

`<itemNumber>`  
Item number.
type: String

- e.g. "8298350"

`<PCBSerialNumber>`  
PCB serial number.
type: String

- e.g. "PCB123456"

`<hwVersion>`  
Hardware version.
type: String

- e.g. "v2.1"

`<swVersion>`  
Software version.
type: String

- e.g. "v4.0.0"

## REST-API

Response:

```bash
http Header with status code 200 OK
```

Body (example):
type: JSON Object

```json
{
    "Connected": true,
    "Name": "RBC Plus DC 24V",
    "Type": "028.610.2",
    "SerialNumber": "2450D00013",
    "ItemNumber": "8298350",
    "PCBSerialNumber": "PCB123456",
    "HwVersion": "v2.1",
    "SwVersion": "v4.0.0"
}
```

## MQTT

not applicable

## WebSocket

not applicable

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)

