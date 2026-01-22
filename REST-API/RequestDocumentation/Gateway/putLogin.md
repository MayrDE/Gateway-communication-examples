# putLogin

Authenticate using username and password.
Please note that the password has to be be MD5 hashed before sending it to the server.

## Path

/Login

## Required service level

`none`

## Body

`Login`

- type: object
- properties:
  - `username`: string, required
  - `password`: string, required

### Example

```json
{
  "username": "Customer",
  "password": "secret"
}
```

## Response

`200 OK`

or

`401 Not Authorized`