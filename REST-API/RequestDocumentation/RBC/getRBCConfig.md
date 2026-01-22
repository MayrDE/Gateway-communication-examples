# getRBCConfig

Get the current RBC configuration.

## Path

/RBC/Config

## Required service level

`none`

## Body

`none`

## Response

`200 OK` (RBCConfig)

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