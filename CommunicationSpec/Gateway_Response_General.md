# General Response

Most of the commands supported by the gateway return a response after execution, which indicates the success or failure of the command.  
This response is dependent on the used communication protocoll and may be not applicable for all protocolls. Additionally it may vary depending on the command used. Please refer to the specific command documentation for more details.

## REST-API

Parameters:

`<errorCode>`  
type: HTTP status code

- 200: OK
- 202: Accepted
- 204: No Content
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 429: Too Many Requests
- 500: Internal Server Error

`<errorDescription>`  
type: plain text

- "Bad request"
- "Unauthorized"
- "Forbidden"
- "Not found"
- "Too many requests"
- "Internal server error"

Response:

```bash
http Header with <errorCode>
```

Body:  
The body can contain JSON Data for example when returning data is expected. This datastructures are explained in detail in the specific Response.md file.  
In case of an error, the body usually contains plain text with a short description of the error.

```json
{"Value": <newState>}
```

## MQTT

Parameters:

`<errorCode>`  
type: integer (uint8)

- 0: No error
- 1: Bad request
- 2: Fail

Topic:

```bash
{GatewayBaseTopic}/error
```

Payload:  

```json
{"Code": <errorCode>}
```

## WebSocket

not applicable

---

[Back to Message List](README.md#message-list) | [Back to ROBA® gateway main page](../README.md)
