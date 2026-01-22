# getGatewayOneWireSettings

Get the one wire settings of the gateway.

## Path

/Gateway/OneWireSettings

## Required service level

`none`

## Body

`none`

## Response

`200 OK` (OneWireSettings)

### Example

```json
{
	"OneWire": {
		"Enabled": true,
		"TempOffset": 0.0,
		"HumOffset": 0.0
	}
}
```