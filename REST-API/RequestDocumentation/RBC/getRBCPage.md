# getRBCPage

Read an RBC page (1–15).

## Path

/RBC/Page/{page}

## Required service level

`none`

## Parameters

`page`

- type: integer
- minimum: 1
- maximum: 15

## Body

`none`

## Response

`200 OK` (RBCPage)

or

`404 Bad Request`

### Example

```json
{
  "Byte0": 118,
  "Byte1": 50,
  "Byte2": 46,
  "Byte3": 49,
  "Byte4": 118,
  "Byte5": 52,
  "Byte6": 46,
  "Byte7": 48,
  "Byte8": 46,
  "Byte9": 49,
  "Byte10": 48,
  "Byte11": 48,
  "Byte12": 203,
  "Byte13": 129,
  "Byte14": 0,
  "Byte15": 0
}
```