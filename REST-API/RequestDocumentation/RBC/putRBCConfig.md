# putRBCConfig

Set the new RBC configuration.

## Path

/RBC/Config

## Required service level

`Service`

## Body

`RBCConfig`

### Example

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

## Response

`204 No Content`

or

`400 Bad Request`

or

`401 Not Authorized`