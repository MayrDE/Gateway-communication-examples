# getGatewaySDInfo

Get Gateway SD card information.

## Path

/Gateway/SDInfo

## Required service level

`none`

## Body

`none`

## Response

`200 OK` (SdInfo)

### Example

```json
{
	"SDCard": {
		"CardType": 3,
		"TotalBytes": 16008609792,
		"UsedBytes": 2048000,
		"FreeBytes": 16006561792
	}
}
```