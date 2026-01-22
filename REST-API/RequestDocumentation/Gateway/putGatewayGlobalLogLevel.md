# putGatewayGlobalLogLevel

Update the global log level of the gateway.

## Path

/Gateway/GlobalLogLevel

## Required service level

`Service`

## Body

`LogLevel`

- `Value`: integer 0..5

### Example

```json
{
	"Value": 3
}
```

## Response

`204 No Content`

or

`400 Bad Request`

or

`401 Not Authorized`