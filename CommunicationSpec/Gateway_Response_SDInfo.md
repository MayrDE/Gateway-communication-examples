# Gateway SD Info Response

Provides the SD card information of the gateway.

## Parameters

`<cardType>`  
SD card type
type: uint8 (enum)

- 0: No card
- 1: MMC
- 2: SD
- 3: SDHC
- 4: unkown

`<totalBytes>`  
Total capacity in bytes.  
type: uint64

-e.g. 16008609792

`<usedBytes>`  
Used bytes  
type: uint64

- e.g. 2048000

`<freeBytes>`  
Available bytes  
type: uint64

- e.g. 16006561792

## REST-API

Response:

```bash
http Header with status code 200 OK
```

Body:  
type: JSON Object

```json
{
    "SDCard": {
        "CardType": <cardType>,
        "TotalBytes": <totalBytes>,
        "UsedBytes": <usedBytes>,
        "FreeBytes": <freeBytes>
    }
}
```

## MQTT

not applicable

## WebSocket

not applicable

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
