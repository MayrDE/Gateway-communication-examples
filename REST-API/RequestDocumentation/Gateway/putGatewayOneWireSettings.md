# putGatewayOneWireSettings

Set the one wire settings of the gateway.

## Path

/Gateway/OneWireSettings

## Required service level

`Service`

## Body

`OneWireSettings`

### Example

```json
{
	"OneWire": {
		"Enabled": true,
		"TempOffset": 0.5,
		"HumOffset": -0.2
	}
}
```

## Response

`204 No Content`

or

`400 Bad Request`

or

`401 Not Authorized`