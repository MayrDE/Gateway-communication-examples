# putGatewayConfigAssistant

Enable or disable the web interface configuration assistant.

## Path

/Gateway/ConfigAssistant

## Required service level

`Customer`

## Body

`OnOff`

- type: object
- `Value`: boolean (true = on, false = off)

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