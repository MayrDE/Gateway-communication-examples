# getGatewayNetwork

Get Gateway network settings.

## Path

/Gateway/Network

## Required service level

`none`

## Body

`none`

## Response

`200 OK` (NetworkSettings)

### Example

```json
{
	"hostname": "gateway-001",
	"NetworkType": 2,
	"dynamicIp": "192.168.1.50",
	"dynamicSubnetMask": "255.255.255.0",
	"dynamicGateway": "192.168.1.1",
	"dynamicDNS1": "8.8.8.8",
	"dynamicDNS2": "1.1.1.1",
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