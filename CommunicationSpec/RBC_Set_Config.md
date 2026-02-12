# Set RBC Config

Set the new RBC configuration.

## Required service level

`Service`

## Parameters

`<RBCConfig>`  
type: JSON Object

```json
{
    "ID": <id>,
    "ControlType": <controlType>,
    "ControlMode": <controlMode>,
    "Overexcitation": <overexcitation>,
    "Holding": <holding>,
    "CoilVoltage": <coilVoltage>,
    "OexcTime": <oexcTime>,
    "ArmDiscCondRec": <armDiscCondRec>,
    "SoftStart": <softStart>,
    "DampedBrake": <dampedBrake>,
    "FreeWheelingVoltage": <freeWheelingVoltage>,
    "ScopeMode": <scopeMode>,
    "ShutdownAutomatic": <shutdownAutomatic>,
    "PrevFuncMon": <prevFuncMon>
}
```

---

`<id>`  
RBC configuration identifier  
type: integer (enum)

- `16` RBC DC
- `32` RBC plus DC 24V
- `37` RBC plus DC 48V
- `48` RBC AC
- `64` RBC plus AC

---

`<controlType>`  
Type of control used  
type: integer (enum)

- `0` No control available
- `1` half-wave rectifier
- `2` bridge recitifer
- `4` ROBA® Switch
- `8` Multi switch
- `32` DC Control
- `64` RBC plus AC

---

`<controlMode>`  
Operating mode depending on controlType  
type: integer (enum)

- If `controlType` is `0`, `1`, `2`, `4`, `8`:
  - `0` No control available

- If `controlType` is `32` (DC Control):

  - `1` Voltage control mode
  - `2` Current control mode
  - `3` Voltage/Current control mode

- If `controlType` is `64` (AC Control):

  - `1` 104V / 52V
  - `2` 207V / 104V
  - `3` 185V / 104V
  - `4` 360V / 185V
  - `5` 185V / 104V

---

`<overexcitation>`  
Overexcitation in volts or amperes (depending on control mode).  
type: float

- e.g. 24.0 for 24V DC brake-checker
- e.g 104.0 for 104V AC brake-checker

---

`<holding>`  
Holding voltage or current in volts or amperes (depending on control mode).  
type: float

- e.g. 12.0 for 12V DC brake-checker
- e.g 52.0 for 52V AC brake-checker

---

`<coilVoltage>` (only Plus AC brake-checkers)  
Nominal rated voltage of the brake coil.  
type: float

- e.g. `24.0`, `48.0`, `110`

---

`<oexcTime>`  
Overexcitation time in ms
type: integer(uint16)

- 0: sets overexcitation to stop automatically when coil reaches magnetic saturation.
- e.g. 250

---

`<armDiscCondRec>`  
Enables or disables the movement monitoring of the armature disk (airflow and debris detection) for released ROBA-stop® safety brakes.
type: boolean

- `true`
- `false`

---

`<softStart>`  (only Plus DC brake-checkers)  
Enables the voltage ramp when energizing the brake.
type: boolean

- `true`
- `false`

---

`<dampedBrake>` (only AC brake-checkers)
Must be enabled when using damped brakes.
type: boolean

- `true`
- `false`

---

`<freeWheelingVoltage>` (only Plus DC brake-checkers)  
Freewheeling voltage in % of full varistor voltage

When set to 100%, the full varistor voltage is used for switch-off (fastest switch-off = increased wear = most noise during switch-off).
When set to 25%, only a quarter of the varistor voltage is used for switch-off. You can see how this setting affects performance in the brake cycle data under Peak cutoff.

type: integer (uint8)

- `25`
- `50`
- `75`
- `100`

---

`<scopeMode>`  
Internal usage only  
type: boolean

- `true`
- `false`

---

`<shutdownAutomatic>` (only applicable for DC brake-checkers)  
If error is detected, RBC switches off the brake power supply.  
type: boolean

- `true`
- `false`

---

`<prevFuncMon>`  
This setting can be used to enable additional system warnings. If this option is disabled, only errors will be reported.  
type: boolean

- `true`
- `false`

## Command

**REST-API**  
Request:

```bash
PUT {BaseURL}/RBC/Config
```

Body (example):

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

---

**MQTT**  
Topic:

```bash
{RBCBaseTopic}/Config/Set
```

Payload (example):  

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

---

**WebSocket**  
not applicable

## Response

**REST-API**  
[REST-API General Response](Gateway_Response_General.md#REST-API)

---

**MQTT**  
[MQTT Confirm](Gateway_Response_ConfigConfirm.md)

---

**WebSocket**  
not applicable

---

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
