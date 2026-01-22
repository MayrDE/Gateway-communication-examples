# getRBCInfo

Get the RBC information like type, name, serial number etc.

## Path

/RBC/Info

## Required service level

`none`

## Body

`none`

## Response

`200 OK` (RBCInfo)

### Example

```json
{
	"Connected": true,
	"Name": "RBC Plus DC 24V",
	"Type": "058.600.2",
	"SerialNumber": "2450D00013",
	"ItemNumber": "8298350",
	"PCBSerialNumber": "PCB123456",
	"HwVersion": "0.1.0.0",
	"SwVersion": "1.0.5"
}
```