# getRBCCycleData

Get the last recorded cycle data values.

## Path

/RBC/CycleData

## Required service level

`none`

## Body

`none`

## Response

`200 OK` (RBCCycleData)

### Example

```json
{
	"Timestamp": 1736340000000,
	"OexcVoltage": 26.5,
	"OexcCurrent": 1.8,
	"HoldVoltage": 12.0,
	"HoldCurrent": 0.9,
	"PeakCutOff": 2.5,
	"Resistance": 21.0,
	"FluxReserve": 35.0,
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