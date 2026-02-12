# RBC Config Response

Provides the current RBC configuration.
This is also sent without request, if the config has changed.

## Parameters

For detailed description of the parameters see [Set RBC Config](RBC_Set_Config.md#parameters).

## REST-API

Response:

```bash
http Header with status code 200 OK
```

Body (example):
type: JSON Object

```json
{
    "ID": 32,
    "ControlType": 32,
    "ControlMode": 2,
    "Overexcitation": 24.0,
    "Holding": 12.0,
    "CoilVoltage": 24.0,
    "OexcTime": 60,
    "ArmDiscCondRec": true,
    "SoftStart": false,
    "DampedBrake": false,
    "FreeWheelingVoltage": 2,
    "ScopeMode": false,
    "ShutdownAutomatic": true,
    "PrevFuncMon": true
}
```

## MQTT

Topic:

```bash
{RBCBaseTopic}/Config
```

Payload (example):
type: JSON Object

```json
{
    "ID": 32,
    "ControlType": 32,
    "ControlMode": 2,
    "Overexcitation": 24.0,
    "Holding": 12.0,
    "CoilVoltage": 24.0,
    "OexcTime": 60,
    "ArmDiscCondRec": true,
    "SoftStart": false,
    "DampedBrake": false,
    "FreeWheelingVoltage": 2,
    "ScopeMode": false,
    "ShutdownAutomatic": true,
    "PrevFuncMon": true
}
```

## WebSocket

Message

```json
{
    "Topic":"/RBC/Config",
    "Value":
    {    
        "ID":32,
        "ControlType":32,
        "ControlMode":1,
        "Overexcitation":32,
        "Holding":11,
        "CoilVoltage":0,
        "OexcTime":0,
        "ArmDiscCondRec":true,
        "SoftStart":false,
        "DampedBrake":false,
        "FreeWheelingVoltage":0,
        "ScopeMode":false,
        "ShutdownAutomatic":false,
        "PrevFuncMon":true
    }
}
```

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
