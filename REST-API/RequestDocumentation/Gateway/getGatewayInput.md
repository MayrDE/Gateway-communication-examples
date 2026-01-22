# getGatewayInput

Get the state of an input from the gateway.

## Path

/Gateway/Input/{channel}

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
	"Value": true
}
```