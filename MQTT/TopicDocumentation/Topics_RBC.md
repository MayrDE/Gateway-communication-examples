# RBC MQTT Topic Documentation

 This document provides an overview of the MQTT topics used by the ROBA® Gateway. It includes details on the published and subscribed topics, as well as the payload structure for each topic. For readability, following example values are used in the examples:

- Serial Number: `1234D12345`
- Topic Prefix: `mayr`
- Discovery Base Topic: `discovery`

# Table of Contents
- [RBC MQTT Topic Documentation](#rbc-mqtt-topic-documentation)
- [Discovery Topics](#discovery-topics)
    - [Cycle Data](#cycle-data)
    - [Configuration](#configuration)
    - [Current Values](#current-values)
- [Published Topics](#published-topics)
	- [Config](#config)
	- [CycleData](#cycledata)
	- [CurrentValues](#currentvalues)
- [Subscribed Topics](#subscribed-topics)
	- [Config/Set](#configset)
	- [Reset](#reset)


# Discovery Topics

## Cycle Data
Topic `discovery/device/1234D12345/config`
<details><summary >Payload:</summary>

```json
{
    "o": {
        "name": "Mayr",
        "sw": "2.2.2",
        "url": "https://www.mayr.com/en"
    },
    "dev": {
        "name": "RBC plus DC 24V",
        "ids": "1234D12345 0x20",
        "mf": "Mayr Antriebstechnik",
        "mdl": "028.610.2",
        "sw": "v4.0.100",
        "hw": "v2.1"
    },
    "cmps": {
        "1234D12345_rbc_reset": {
            "uniq_id": "1234D12345_rbc_reset",
            "name": "Restart RBC",
            "p": "button",
            "cmd_t": "mayr/RBC/1234D12345/Reset"
        },
        "1234D12345_OexcVoltage": {
            "uniq_id": "1234D12345_OexcVoltage",
            "name": "Overexcitation voltage",
            "p": "sensor",
            "dev_cla": "voltage",
            "unit_of_meas": "V",
            "val_tpl": "{{ value_json.OexcVoltage | float | round(2) }}",
            "stat_t": "mayr/RBC/1234D12345/CycleData"
        },
        "1234D12345_OexcCurrent": {
            "uniq_id": "1234D12345_OexcCurrent",
            "name": "Overexcitation current",
            "p": "sensor",
            "dev_cla": "current",
            "unit_of_meas": "A",
            "val_tpl": "{{ value_json.OexcCurrent | float | round(3) }}",
            "stat_t": "mayr/RBC/1234D12345/CycleData"
        },
        "1234D12345_HoldVoltage": {
            "uniq_id": "1234D12345_HoldVoltage",
            "name": "Hold voltage",
            "p": "sensor",
            "dev_cla": "voltage",
            "unit_of_meas": "V",
            "val_tpl": "{{ value_json.HoldVoltage | float | round(2) }}",
            "stat_t": "mayr/RBC/1234D12345/CycleData"
        },
        "1234D12345_HoldCurrent": {
            "uniq_id": "1234D12345_HoldCurrent",
            "name": "Hold current",
            "p": "sensor",
            "dev_cla": "current",
            "unit_of_meas": "A",
            "val_tpl": "{{ value_json.HoldCurrent | float | round(3) }}",
            "stat_t": "mayr/RBC/1234D12345/CycleData"
        },
        "1234D12345_PeakCutOff": {
            "uniq_id": "1234D12345_PeakCutOff",
            "name": "Peak cutoff",
            "p": "sensor",
            "dev_cla": "voltage",
            "unit_of_meas": "V",
            "val_tpl": "{{ value_json.PeakCutOff | float | round(3) }}",
            "stat_t": "mayr/RBC/1234D12345/CycleData"
        },
        "1234D12345_Resistance": {
            "uniq_id": "1234D12345_Resistance",
            "name": "Resistance",
            "p": "sensor",
            "unit_of_meas": "Ohm",
            "val_tpl": "{{ value_json.Resistance | float | round(2) }}",
            "stat_t": "mayr/RBC/1234D12345/CycleData"
        },
        "1234D12345_FluxReserve": {
            "uniq_id": "1234D12345_FluxReserve",
            "name": "Flux reserve",
            "p": "sensor",
            "unit_of_meas": "%",
            "val_tpl": "{{ value_json.FluxReserve * 100 | float | round(0) }}",
            "stat_t": "mayr/RBC/1234D12345/CycleData"
        },
        "1234D12345_CyclePower": {
            "uniq_id": "1234D12345_CyclePower",
            "name": "Cycle power",
            "p": "sensor",
            "dev_cla": "power",
            "unit_of_meas": "W",
            "val_tpl": "{{ value_json.CyclePower | float | round(2) }}",
            "stat_t": "mayr/RBC/1234D12345/CycleData"
        },
        "1234D12345_OexcTime": {
            "uniq_id": "1234D12345_OexcTime",
            "name": "Overexcitation time",
            "p": "sensor",
            "dev_cla": "duration",
            "unit_of_meas": "s",
            "val_tpl": "{{ value_json.OexcTime | float | round(3) }}",
            "stat_t": "mayr/RBC/1234D12345/CycleData"
        },
        "1234D12345_T11": {
            "uniq_id": "1234D12345_T11",
            "name": "T11",
            "p": "sensor",
            "dev_cla": "duration",
            "unit_of_meas": "s",
            "val_tpl": "{{ value_json.T11 | float | round(3) }}",
            "stat_t": "mayr/RBC/1234D12345/CycleData"
        },
        "1234D12345_T2": {
            "uniq_id": "1234D12345_T2",
            "name": "T2",
            "p": "sensor",
            "dev_cla": "duration",
            "unit_of_meas": "s",
            "val_tpl": "{{ value_json.T2 | float | round(3) }}",
            "stat_t": "mayr/RBC/1234D12345/CycleData"
        },
        "1234D12345_CycleOnTime": {
            "uniq_id": "1234D12345_CycleOnTime",
            "name": "Cycle-on runtime",
            "p": "sensor",
            "dev_cla": "duration",
            "unit_of_meas": "s",
            "val_tpl": "{{ value_json.CycleOnTime | float | round(3) }}",
            "stat_t": "mayr/RBC/1234D12345/CycleData"
        },
        "1234D12345_CycleOffTime": {
            "uniq_id": "1234D12345_CycleOffTime",
            "name": "Cycle-off runtime",
            "p": "sensor",
            "dev_cla": "duration",
            "unit_of_meas": "s",
            "val_tpl": "{{ value_json.CycleOffTime | float | round(3) }}",
            "stat_t": "mayr/RBC/1234D12345/CycleData"
        },
        "1234D12345_SignalStrength": {
            "uniq_id": "1234D12345_SignalStrength",
            "name": "Release monitoring signal",
            "p": "sensor",
            "unit_of_meas": "%",
            "val_tpl": "{{ value_json.SignalStrength * 100 | float | round(0) }}",
            "stat_t": "mayr/RBC/1234D12345/CycleData"
        },
        "1234D12345_ErrorCode": {
            "uniq_id": "1234D12345_ErrorCode",
            "name": "Error code",
            "p": "sensor",
            "val_tpl": "{{ value_json.ErrorCode }}",
            "stat_t": "mayr/RBC/1234D12345/CycleData"
        },
        "1234D12345_MPUTemp": {
            "uniq_id": "1234D12345_MPUTemp",
            "name": "MPU temperature",
            "p": "sensor",
            "dev_cla": "temperature",
            "unit_of_meas": "┬░C",
            "val_tpl": "{{ value_json.MPUTemp | float | round(0) }}",
            "stat_t": "mayr/RBC/1234D12345/CycleData"
        }
    }
}
```
</details>

## Configuration

Topic `discovery/device/1234D12345/config`

<details><summary>Payload:</summary>

```json
{
    "o": {
        "name": "Mayr",
        "sw": "2.2.2",
        "url": "https://www.mayr.com/en"
    },
    "dev": {
        "name": "RBC plus DC 24V Config",
        "ids": "1234D12345 Config",
        "mf": "Mayr Antriebstechnik",
        "mdl": "028.610.2",
        "sw": "v4.0.100",
        "hw": "v2.1"
    },
    "cmps": {
        "1234D12345_ControlType": {
            "uniq_id": "1234D12345_ControlType",
            "name": "Control type",
            "p": "sensor",
            "val_tpl": "{{ value_json.ControlType }}",
            "stat_t": "mayr/RBC/1234D12345/Config"
        },
        "1234D12345_ControlMode": {
            "uniq_id": "1234D12345_ControlMode",
            "name": "Control mode",
            "p": "sensor",
            "val_tpl": "{{ value_json.ControlMode }}",
            "stat_t": "mayr/RBC/1234D12345/Config"
        },
        "1234D12345_Overexcitation": {
            "uniq_id": "1234D12345_Overexcitation",
            "name": "Overexcitation voltage/current [V/A]",
            "p": "sensor",
            "val_tpl": "{{ value_json.Overexcitation }}",
            "stat_t": "mayr/RBC/1234D12345/Config"
        },
        "1234D12345_Holding": {
            "uniq_id": "1234D12345_Holding",
            "name": "Holding voltage/current [V/A]",
            "p": "sensor",
            "val_tpl": "{{ value_json.Holding }}",
            "stat_t": "mayr/RBC/1234D12345/Config"
        },
        "1234D12345_CoilVoltage": {
            "uniq_id": "1234D12345_CoilVoltage",
            "name": "Brake coil voltage",
            "p": "sensor",
            "dev_cla": "voltage",
            "unit_of_meas": "V",
            "val_tpl": "{{ value_json.CoilVoltage }}",
            "stat_t": "mayr/RBC/1234D12345/Config"
        },
        "1234D12345_OexcTime": {
            "uniq_id": "1234D12345_OexcTime",
            "name": "Overexcitation time",
            "p": "sensor",
            "dev_cla": "duration",
            "unit_of_meas": "ms",
            "val_tpl": "{{ value_json.OexcTime }}",
            "stat_t": "mayr/RBC/1234D12345/Config"
        },
        "1234D12345_ArmDiscCondRec": {
            "uniq_id": "1234D12345_ArmDiscCondRec",
            "name": "Armature disc condition recognition",
            "p": "sensor",
            "val_tpl": "{{ value_json.ArmDiscCondRec }}",
            "stat_t": "mayr/RBC/1234D12345/Config"
        },
        "1234D12345_SoftStart": {
            "uniq_id": "1234D12345_SoftStart",
            "name": "Soft start",
            "p": "sensor",
            "val_tpl": "{{ value_json.SoftStart }}",
            "stat_t": "mayr/RBC/1234D12345/Config"
        },
        "1234D12345_DampedBrake": {
            "uniq_id": "1234D12345_DampedBrake",
            "name": "Damped brake",
            "p": "sensor",
            "val_tpl": "{{ value_json.DampedBrake }}",
            "stat_t": "mayr/RBC/1234D12345/Config"
        },
        "1234D12345_FreeWheelingVoltage": {
            "uniq_id": "1234D12345_FreeWheelingVoltage",
            "name": "Freewheeling voltage",
            "p": "sensor",
            "val_tpl": "{{ value_json.FreeWheelingVoltage }}",
            "stat_t": "mayr/RBC/1234D12345/Config"
        },
        "1234D12345_ScopeMode": {
            "uniq_id": "1234D12345_ScopeMode",
            "name": "Scope mode",
            "p": "sensor",
            "val_tpl": "{{ value_json.ScopeMode }}",
            "stat_t": "mayr/RBC/1234D12345/Config"
        },
        "1234D12345_ShutdownAutomatic": {
            "uniq_id": "1234D12345_ShutdownAutomatic",
            "name": "Shutdown automatic",
            "p": "sensor",
            "val_tpl": "{{ value_json.ShutdownAutomatic }}",
            "stat_t": "mayr/RBC/1234D12345/Config"
        },
        "1234D12345_PrevFuncMon": {
            "uniq_id": "1234D12345_PrevFuncMon",
            "name": "Preventive function monitoring",
            "p": "sensor",
            "val_tpl": "{{ value_json.PrevFuncMon }}",
            "stat_t": "mayr/RBC/1234D12345/Config"
        }
    }
}
```
</details>

## Current Values
Topic `discovery/device/1234D12345/config`

<details><summary>Payload:</summary>

```json
{
    "o": {
        "name": "Mayr",
        "sw": "2.2.2",
        "url": "https://www.mayr.com/en"
    },
    "dev": {
        "name": "RBC plus DC 24V Current Values",
        "ids": "1234D12345 Current Values",
        "mf": "Mayr Antriebstechnik",
        "mdl": "028.610.2",
        "sw": "v4.0.100",
        "hw": "v2.1"
    },
    "cmps": {
        "1234D12345_Connected": {
            "uniq_id": "1234D12345_Connected",
            "name": "Connected",
            "p": "sensor",
            "val_tpl": "{{ value_json.Connected }}",
            "stat_t": "mayr/RBC/1234D12345/CurrentValues"
        },
        "1234D12345_Voltage": {
            "uniq_id": "1234D12345_Voltage",
            "name": "Voltage",
            "p": "sensor",
            "dev_cla": "voltage",
            "unit_of_meas": "V",
            "val_tpl": "{{ value_json.Voltage }}",
            "stat_t": "mayr/RBC/1234D12345/CurrentValues"
        },
        "1234D12345_Current": {
            "uniq_id": "1234D12345_Current",
            "name": "Current",
            "p": "sensor",
            "dev_cla": "current",
            "unit_of_meas": "A",
            "val_tpl": "{{ value_json.Current }}",
            "stat_t": "mayr/RBC/1234D12345/CurrentValues"
        },
        "1234D12345_State": {
            "uniq_id": "1234D12345_State",
            "name": "State",
            "p": "sensor",
            "val_tpl": "{{ value_json.State }}",
            "stat_t": "mayr/RBC/1234D12345/CurrentValues"
        },
        "1234D12345_ErrorCode": {
            "uniq_id": "1234D12345_ErrorCode",
            "name": "Error code",
            "p": "sensor",
            "val_tpl": "{{ value_json.ErrorCode }}",
            "stat_t": "mayr/RBC/1234D12345/CurrentValues"
        },
        "1234D12345_Error": {
            "uniq_id": "1234D12345_Error",
            "name": "Error",
            "p": "sensor",
            "val_tpl": "{{ value_json.Error }}",
            "stat_t": "mayr/RBC/1234D12345/CurrentValues"
        },
        "1234D12345_SlowFast": {
            "uniq_id": "1234D12345_SlowFast",
            "name": "Slow / Fast",
            "p": "sensor",
            "val_tpl": "{{ value_json.SlowFast }}",
            "stat_t": "mayr/RBC/1234D12345/CurrentValues"
        },
        "1234D12345_Input": {
            "uniq_id": "1234D12345_Input",
            "name": "Input",
            "p": "sensor",
            "val_tpl": "{{ value_json.Input }}",
            "stat_t": "mayr/RBC/1234D12345/CurrentValues"
        },
        "1234D12345_Output": {
            "uniq_id": "1234D12345_Output",
            "name": "Output",
            "p": "sensor",
            "val_tpl": "{{ value_json.Output }}",
            "stat_t": "mayr/RBC/1234D12345/CurrentValues"
        },
        "1234D12345_Signal": {
            "uniq_id": "1234D12345_Signal",
            "name": "Signal",
            "p": "sensor",
            "val_tpl": "{{ value_json.Signal }}",
            "stat_t": "mayr/RBC/1234D12345/CurrentValues"
        },
        "1234D12345_Start": {
            "uniq_id": "1234D12345_Start",
            "name": "Start",
            "p": "sensor",
            "val_tpl": "{{ value_json.Start }}",
            "stat_t": "mayr/RBC/1234D12345/CurrentValues"
        },
        "1234D12345_Warn": {
            "uniq_id": "1234D12345_Warn",
            "name": "Warn",
            "p": "sensor",
            "val_tpl": "{{ value_json.Warn }}",
            "stat_t": "mayr/RBC/1234D12345/CurrentValues"
        }
    }
}
```
</details>




# Published Topics

## Config

Is sent once during startup and whenever the configuration of the RBC changes.

### Message

| Topic                         | Payload |
|-------------------------------|---------|
|`mayr/RBC/1234D12345/Config`   |<code><pre>{<br>    "ID": &lt;id&gt;,<br>    "ControlType": &lt;control_type&gt;,<br>    "ControlMode": &lt;control_mode&gt;,<br>    "Overexcitation": &lt;overexcitation&gt;,<br>    "Holding": &lt;holding&gt;,<br>    "CoilVoltage": &lt;coil_voltage&gt;,<br>    "OexcTime": &lt;oexc_time&gt;,<br>    "ArmDiscCondRec": &lt;arm_disc_cond_rec&gt;,<br>    "SoftStart": &lt;soft_start&gt;,<br>    "DampedBrake": &lt;damped_brake&gt;,<br>    "FreeWheelingVoltage": &lt;free_wheeling_voltage&gt;,<br>    "ScopeMode": &lt;scope_mode&gt;,<br>    "ShutdownAutomatic": &lt;shutdown_automatic&gt;,<br>    "PrevFuncMon": &lt;prev_func_mon&gt;<br>}</pre></code>   |

`<id>` RBC configuration identifier
- `16` RBC DC
- `32` RBC plus DC 24V
- `37` RBC plus DC 48V
- `48` RBC AC
- `64` RBC plus AC

`<control_type>` Type of control used
- `0` No control available
- `1` half-wave rectifier
- `2` bridge recitifer
- `4` ROBA® Switch
- `8` Multi switch
- `32` DC Control
- `64` RBC plus AC

`<control_mode>` Operating mode
- If `control type` is `0`, `1`, `2`, `4`, `8`:
    - `0` No control available

- If `control type` is `32`:
    - `1` Voltage control mode
    - `2` Current control mode
    - `3` Voltage/Current control mode

- If `control type` is `64`:
    - `1` 104V / 52V
    - `2` 207V / 104V
    - `3` 185V / 104V
    - `4` 360V / 185V
    - `5` 185V / 104V

`<overexcitation>` Overexcitation voltage
- point seperated float within the voltage range
- Only applicable for RBC plus DC 24V and RBC plus AC in combination with ROBA® Multi switch

`<holding>` Holding voltage
- point seperated float within the voltage range
- Only applicable for RBC plus DC 24V and RBC plus AC in combination with ROBA® Multi switch

TODO not sure how to continue here.
Until now it's based on https://gitlab.chrmayr.lan/elo/iot-gateway/-/blob/dev/Doku/RBCControlTypes.drawio?ref_type=heads

`<coil_voltage>` Nominal rated voltage of the brake coil
 - e.g. `24`, `48`, `110

`<oexc_time>` Overexcitation time in ms
- e.g. 250

`<arm_disc_cond_rec>` Armature disc condition recognition
- `true`
- `false`

`<soft_start>` Soft start enabled
- `true`
- `false`

`<damped_brake>` Damped brake enabled
- `true`
- `false`

`<free_wheeling_voltage>` Freewheeling voltage in V
- `0`
- `12`

`<scope_mode>` Internal usage only
- `true`
- `false`

`<shutdown_automatic>` Automatic shutdown
- `true`
- `false`

`<prev_func_mon>` Preventive function monitoring
- `true`
- `false`


## CycleData

Measurement data of one brake cycle are sent once the cycle is completed. This is when the brake is closed again after being energized.

### Message

| Topic                             | Payload |
|-----------------------------------|---------|
|`mayr/RBC/1234D12345/CycleData`    |<code><pre>{<br>    "Timestamp": &lt;timestamp&gt;,<br>    "OexcVoltage": &lt;oexc_voltage&gt;,<br>    "OexcCurrent": &lt;oexc_current&gt;,<br>    "HoldVoltage": &lt;hold_voltage&gt;,<br>    "HoldCurrent": &lt;hold_current&gt;,<br>    "PeakCutOff": &lt;peak_cut_off&gt;,<br>    "Resistance": &lt;resistance&gt;,<br>    "FluxReserve": &lt;flux_reserve&gt;,<br>    "CyclePower": &lt;cycle_power&gt;,<br>    "OexcTime": &lt;oexc_time&gt;,<br>    "T11": &lt;t11&gt;,<br>    "T2": &lt;t2&gt;,<br>    "CycleOnTime": &lt;cycle_on_time&gt;,<br>    "CycleOffTime": &lt;cycle_off_time&gt;,<br>    "SignalStrength": &lt;signal_strength&gt;,<br>    "ErrorCode": &lt;error_code&gt;,<br>    "MPUTemp": &lt;mpu_temp&gt;<br>}</pre></code>   |

`<timestamp>` Epoch Unix Timestamp in ms
- e.g.`1768922194289`

`<oexc_voltage>` measured overexcitation voltage in V (float)
- e.g `23.45598`

`<oexc_current>` measured overexcitation current in A (float)
- e.g.`1.542419`

`<hold_voltage>` measured holding voltage in V (float)
- e.g.`11.99908`

`<hold_current>` measured holding current in A (float)
- e.g.`0.779667`

`<peak_cut_off>` Peak cutoff value (signed integer)  TODO is that correct?
- -e.g.`-54`

`<resistance>` measured coil resistance in Ω (float)
- e.g. `15.39`

`<flux_reserve>` Flux reserve (fraction 0..1)  TODO whats that exactly?
- e.g. `0.67`


`<cycle_power>` Cycle power in W (float)  TODO is this really power or rather energy? which unit?
- e.g. `9.523326`

`<oexc_time>` measured overexcitation duration in s (float)
- e.g. `0.258`

`<t11>` time from switching off the voltage until reaching full brake torque again in s (float)
- e.g. `0.013`

`<t2>` time from switching on the voltage until full release of the brake in s (float)
- e.g. `0.06`

`<cycle_on_time>` time of brake energized s (float)
- e.g. `15.737`

`<cycle_off_time>` time of brake not energized in s (float)
- e.g. `725.174`

`<signal_strength>` Release signal strength (fraction 0..1)  TODO whats that?
- e.g. `0.248`

`<error_code>` Error code
- `0` cable break
- `1` Input voltage < hold voltage      TODO verify these codes
- `2` brake closed not detected
- `3` brake open not detected
- `4` accidental brake open
- `5` overcurrent
- `6` DIP switch error
- `7` no brake detected
- `8` internal error
- `9` input voltage < 16V
- `10` communication error
- `11` functional reserve higher 85%
- `12` no brake open signal after overexcitation time
- `13` overexcitation warning
- `14` temperature warning
- `15` limit warning
- `16` no error

`<mpu_temp>` MPU temperature in °C (integer)
- e.g. `31`



## CurrentValues

Is sent on change of cycle values, or every second. TODO is that correct?

### Message

| Topic                              | Payload |
|------------------------------------|---------|
|`mayr/RBC/1234D12345/CurrentValues` |<code><pre>{<br>    "Connected": &lt;connected&gt;,<br>    "Voltage": &lt;voltage&gt;,<br>    "Current": &lt;current&gt;,<br>    "State": &lt;state&gt;,<br>    "ErrorCode": &lt;error_code&gt;,<br>    "Error": &lt;error&gt;,<br>    "SlowFast": &lt;slow_fast&gt;,<br>    "Input": &lt;input&gt;,<br>    "Output": &lt;output&gt;,<br>    "Signal": &lt;signal&gt;,<br>    "Start": &lt;start&gt;,<br>    "Warn": &lt;warn&gt;<br>}</pre></code>    |


`<connected>` Connection state of the RBC
- `true`
- `false`

`<voltage>` Voltage in V (float), point as decimal separator
- e.g. `24.0`

`<current>` Current in A (float), point as decimal separator
- e.g. `0.50`

`<state>` Operating state code
- `0` idle state
- `1` energizing state 1
- `2` energizing state 2
- `3` hold state
- `4` error state



`<error_code>` Error code
- `0` cable break
- `1` Input voltage < hold voltage      TODO verify these codes
- `2` brake closed not detected
- `3` brake open not detected
- `4` accidental brake open
- `5` overcurrent
- `6` DIP switch error
- `7` no brake detected
- `8` internal error
- `9` input voltage < 16V
- `10` communication error
- `11` functional reserve higher 85%
- `12` no brake open signal after overexcitation time
- `13` overexcitation warning
- `14` temperature warning
- `15` limit warning
- `16` no error



`<error>` Error flag    TODO i dont know what this is
- `true`
- `false`

`<slow_fast>` Slow/Fast mode
- `true` slow                   TODO i don't know since here.
- `false` fast

`<input>` Input state
- `true`
- `false`

`<output>` Output state
- `true`
- `false`

`<signal>` Signal state
- `true`
- `false`

`<start>` Start signal
- `true`
- `false`

`<warn>` Warning flag
- `true`
- `false`


# Subscribed Topics

## Config/Set

### Message

| Topic                             | Payload    |
|-----------------------------------|------------|
|`mayr/RBC/1234D12345/Config/Set`   |`<payload>` |


For detailed description of the `<payload>`, see [Config](#config)

> ATTENTION  
> The configuration values are not validated by the ROBA® Gateway. Please ensure that only valid values are sent to avoid misconfiguration of the ROBA® brake-checker®.
> Invalid configurations may lead to unexpected behavior or damage to the device.


## Reset

Performs a soft reset of the ROBA® brake-checker®.

### Message

| Topic                         | Payload |
|-------------------------------|---------|
|`mayr/RBC/1234D12345/Reset`    |`none`   |    

### Answer (Example)
| Answer Topic                                            |Answer Payload (Example) |
|---------------------------------------------------------|-------------------------|
|[`mayr/Gateway/2521D00163/Config/confirm`](#errorcode)   | `{"error":1,"module_id":"2521D00163"}` |

TODO we maybe need to change this topic see https://gitlab.chrmayr.lan/elo/iot-gateway/-/issues/39
and add an additional topic in the [Published topics](#published-topics) section.


