# RBC Current Values Response

Provides the current electrical and state values from the RBC.
This is also sent without request, if the values have changed.

## Parameters

`<connected>`  
Connection status of IrDa interface between gateway and RBC.
type: Boolean

- true
- false

`<voltage>`  
Voltage currently applied to the brake. The brake-checker sends this information every second, or whenever its state changes.
type: float

- e.g. 24.0

`<current>`  
Current currently flowing through the brake. The brake-checker sends this information every second, or whenever its state changes.
type: float

-e.g. 1.45

`<state>`  
Currrent brake state. The brake-checker sends this information every second, or whenever its state changes.
type: uint8 (enum)

- 0: idle (brake closed, no current flowing)
- 1: energizing 1 (brake energized, but not yet open)
- 2: energizing 2 (brake energized and open)
- 3: holding (voltage/current is lowered to holding value)
- 4: de-energizing (brake is being de-energized and switches to idle if succesful)
- 5: error (brake in error state)

`<errorCode>`  
error code reported by the brake-checker. This applies always to current switching cycle.
type: uint8 (enum)

- `0` Error: Wire break or external switch open
- `1` Error: Overvoltage
- `2` Error: No drop-out detected
- `3` Error: No release detected
- `4` Error: Unintended drop detected
- `5` Error: Overcurrent
- `6` reserved
- `7` Error: No brake connected
- `8` reserved
- `9` Error: Low input voltage
- `10` reserved
- `11` Warning: Magnetic reserve critical
- `12` reserved
- `13` Warning: Automatic overexcitation still not detected after 2 seconds
- `14` Warning/Error: Overtemperature detected
- `15` Error: Configured limit exceeded
- `16` No error

`<error>`  
Indicates the error output of the brake-checker is active
type: Boolean

- true if error output is active
- false if error output is inactive

`<slowFast>`  
Indicates whether the Slow/Fast function on the brake-checker is active (if available).
type: Boolean

- true
- false

`<input>`  
Indicates whether the additional digital input of the brake-checker is active (if available)
type: Boolean

- true
- false

`<output>`  
Indicates whether the additional digital output of the brake-checker is active (if available).
type: Boolean

- true
- false

`<signal>`  
Indicates whether the signal output of the brake-checker is active.
type: Boolean

- true
- false

`<start>`  
Indicates whether the start signal is present at the brake-checker (if available).
type: Boolean

- true
- false

`<warn>`  
Enabled, for example, when the magnetic reserve exceeds the specified limit (if available).
type: Boolean

- true
- false

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
    "Voltage": 24.0,
    "Current": 1.2,
    "State": 3,
    "ErrorCode": 0,
    "Error": false,
    "SlowFast": true,
    "Input": true,
    "Output": true,
    "Signal": true,
    "Start": false,
    "Warn": false
}
```

## MQTT

Topic:

```bash
{RBCBaseTopic}/CurrentValues
```

Payload (example):
type: JSON Object

```json
{
    "Connected": true,
    "Voltage": 24.0,
    "Current": 1.2,
    "State": 3,
    "ErrorCode": 0,
    "Error": false,
    "SlowFast": true,
    "Input": true,
    "Output": true,
    "Signal": true,
    "Start": false,
    "Warn": false
}
```

## WebSocket

Message

```json
{
    "Topic":"/RBC/CurrentValues",
    "Value":
    {
        "Connected":true,
        "Voltage":-0.006319,
        "Current":0.004834,
        "State":0,
        "ErrorCode":16,
        "Error":true,
        "SlowFast":false,
        "Input":false,
        "Output":false,
        "Signal":false,
        "Start":false,
        "Warn":false
    }
}
```

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
