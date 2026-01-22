# getGatewayOutput

Get the state of an output from the gateway.

## Path

/Gateway/Output/{channel}

## Required service level

`none`

## Parameters

`channel`

- type: integer (uint8)
- minimum: 0
- maximum: 1

## Body

`none`

## Response

`200 OK` (On/Off)

### Example

```json
{
	"Value": false
}
```