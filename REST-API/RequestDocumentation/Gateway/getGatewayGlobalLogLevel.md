# getGatewayGlobalLogLevel

Retrieve the current global log level of the gateway.

## Path

/Gateway/GlobalLogLevel

## Required service level

`none`

## Body

`none`

## Response

`200 OK` (LogLevel)

- `Value`: integer 0..5 (0=Verbose, 1=Debug, 2=Information, 3=Warning, 4=Error, 5=Fatal)

### Example

```json
{
	"Value": 2
}
```