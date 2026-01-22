# putGatewayToslinkSettings

Set toslink settings of the gateway.

## Path

/Gateway/ToslinkSettings

## Required service level

`Service`

## Body

`ToslinkSettings`

### Example

```json
{
	"Toslink": {
		"Enabled": false
	}
}
```

## Response

`204 No Content`

or

`400 Bad Request`

or

`401 Not Authorized`