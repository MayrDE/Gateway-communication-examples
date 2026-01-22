# putGatewayNetwork

Set Gateway network settings.

## Path

/Gateway/Network

## Required service level

`Service`

## Body

`NetworkSettings`

### Example

```json
{
	"hostname": "gateway-001",
	"NetworkType": 1,
	"StaticIP": {
		"StaticIPAddress": "192.168.1.10",
		"StaticSubnet": "255.255.255.0",
		"StaticGateway": "192.168.1.1",
		"StaticDNS1": "8.8.8.8",
		"StaticDNS2": "1.1.1.1"
	},
	"NtpSettings": {
		"Enabled": true,
		"Server": "pool.ntp.org"
	}
}
```

## Response

`204 No Content`

or

`400 Bad Request`

or

`401 Not Authorized`