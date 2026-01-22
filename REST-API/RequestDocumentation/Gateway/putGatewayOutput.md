# putGatewayOutput

Set an output of the gateway.

## Path

/Gateway/Output/{channel}

## Required service level

`Customer`

## Parameters

`channel`

- type: integer (uint8)
- minimum: 0
- maximum: 1

## Body

`OnOff`

- `Value`: boolean

### Example

```json
{
	"Value": true
}
```

## Response

`204 No Content`

or

`400 Bad Request`

or

`401 Not Authorized`