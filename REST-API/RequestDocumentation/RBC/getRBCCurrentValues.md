# getRBCCurrentValues

Returns the current values of the RBC like voltage, current etc.

## Path

/RBC/CurrentValues

## Required service level

`none`

## Body

`none`

## Response

`200 OK` (RBCCurrentValues)

### Example

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