# RBC Cycle Data Response

Provides the cycle data values of latest brake cycle.

## Parameters

`<timestamp>`  
Epoch Unix Timestamp in ms
type: uint64

- e.g.`1768922194289`

`<oexc_voltage>  
Highest measured overexcitation voltage in Volts
type: float

- e.g `23.45598`

`<oexc_current>`  
Highest measured overexcitation current cycle in Amperes
type: float

- e.g.`1.542419`

`<hold_voltage>`  
Highest measured holding voltage in Volts
type: float

- e.g.`11.99908`

`<hold_current>`  
Highest measured holding current in Amperes
type: float

- e.g.`0.779667`

`<peak_cut_off>`
 Displays the peak voltage during fast switch-off in volts. This value is always negative.

- `0.0` for slow switch-off
- -e.g.`-54`

`<resistance>`
This value indicates the measured internal resistance of the brake coil in ohms. Usually, the warmer the brake becomes, for example through multiple rapid switching in succession, the higher the resistance will be.
Type: float

- e.g. `15.39`

`<magnetic_reserve>`  
This value indicates the magnetic  reserve in percent. The higher this value, the more reserve is available
Type: float

- e.g. `0.21`

`<cycle_power>`  
Averaged power of the entire brake cycle in watts
Type: float

- e.g. `9.523326`

`<oexc_time>`  
Measured overexcitation duration in seconds  
Type: float

- e.g. `0.258`

`<t11>`  
Time from switching off the voltage until reaching full brake torque again in seconds
Type: float

- e.g. `0.013`

`<t2>`  
Time from switching on the voltage until full release of the brake in seconds
Type: float

- e.g. `0.06`

`<cycle_on_time>`  
Time of brake energized in seconds
Type: float

- e.g. `15.737`

`<cycle_off_time>`  
Time of brake not energized in seconds
Type: float

- e.g. `725.174`

`<signal_strength>`  
Signal strength (fraction 0..1)
Type: float

- e.g. `0.248`

`<mpu_temp>`  
Temperature of the MPU in degree Celsius
Type: int8

- e.g. 23

`<error_code>`
Error code of the brake cycle
Type: uint8 (enum)

See [Error Codes](RBC_Response_CurrentValues.md#parameters) for details

## REST-API

Response:

```bash
http Header with status code 200 OK
```

Body (example):
type: JSON Object

```json
{
    "Timestamp": 1736340000000,
    "OexcVoltage": 26.5,
    "OexcCurrent": 1.8,
    "HoldVoltage": 12.0,
    "HoldCurrent": 0.9,
    "PeakCutOff": 2.5,
    "Resistance": 21.0,
    "MagneticReserve": 22.0,
    "CyclePower": 15.3,
    "OexcTime": 58.0,
    "T11": 60.0,
    "T2": 120.0,
    "CycleOnTime": 2200.0,
    "CycleOffTime": 1800.0,
    "SignalStrength": 75.0,
    "ErrorCode": 0,
    "MPUTemp": 45.0
}
```

## MQTT

Topic:

```bash
{RBCBaseTopic}/CycleData
```

Payload (example):
type: JSON Object

```json
{
    "Timestamp": 1770128258253,
    "OexcVoltage": 23.42032,
    "OexcCurrent": 1.530228,
    "HoldVoltage": 23.41954,
    "HoldCurrent": 1.528743,
    "PeakCutOff": 0,
    "Resistance": 15.31,
    "MagneticReserve": 22.0,
    "CyclePower": 20.90706,
    "OexcTime": 0.269,
    "T11": 0.108,
    "T2": 0.061,
    "CycleOnTime": 1.4,
    "CycleOffTime": 102.229,
    "SignalStrength": 0.256,
    "ErrorCode": 16,
    "MPUTemp": 33
}
```

## WebSocket

Message:

```json
{
    "Topic": "/RBC/CycleData",
    "Value": {
        "Timestamp": 1770128154463,
        "OexcVoltage": 23.41838,
        "OexcCurrent": 1.533168,
        "HoldVoltage": 23.42068,
        "HoldCurrent": 1.52463,
        "PeakCutOff": 0,
        "Resistance": 15.36,
        "MagneticReserve": 22.0,
        "CyclePower": 29.93804,
        "OexcTime": 0.27,
        "T11": 0.111,
        "T2": 0.061,
        "CycleOnTime": 3.601,
        "CycleOffTime": 2233.493,
        "SignalStrength": 0.252,
        "ErrorCode": 16,
        "MPUTemp": 33
    }
}
```

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
