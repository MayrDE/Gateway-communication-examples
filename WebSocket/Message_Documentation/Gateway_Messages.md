# WebSocket Message Documentation

For sending or receiving any message from/to the ROBA® Gateway via WebSocket you have to establish a WebSocket connection to one of the available endpoints first.
Once the connection is established, you can send or receive configuration or data messages, usually in JSON format or binary format.

For most of the configuration messages, a minimum Service Level of `Service" is required. This can be set via [REST-API](../../REST-API/README.md) or via the Web Interface.

Currently, if setting a configuration, there is no response on WebSocket connection.

## Configuration options

- [Set system time](#set-system-time)
- [Set Outputs](#set-outputs)
- [Gateway Restart](#gateway-restart)
- [Gateway Factory Reset](#gateway-factory-reset)

## Set system time

Normally the ROBA® Gateway tries to connect to an NTP server during startup to set the system time automatically, in case the NTP server has been enabled in the network configuration. If no NTP server is available (e.g. in local networks) you can set the system time manually via WebSocket. Once a connection to [MessageLogger](../README.md#connection-endpoints) is established, the ROBA® Gateway asks explicitly for the current system time, if the time is not set yet. The request message looks like this.

Socket data type: `plain text`

```txt
"/GetTime"
```

The answer from the client has to be a JSON object with the current time in milliseconds since unix epoch like in the example below:
It does not require any special service Level.

```json
{
    "TimeUTC": "1729838267519"
}
```

## Set Outputs

Set the digital outputs of the ROBA® Gateway.

Required service level: `Customer`
Socket data type: `JSON text`

```json
{
    "Topic":"/Gateway/Outputs",
    "Number":<output_number>,
    "Value":<output_value>}
```

- `<output_number>`: Number of the output to set (0 or 1)
- `<output_value>`: Value to set (true or false)

## Gateway Restart

Performs a soft restart of the ROBA® Gateway.

Required service level: `Customer`
Socket data type: `JSON text`

```json
{
    "Topic":"/Gateway/Restart"
}
```

## Gateway Factory Reset

Performs a factory reset of the ROBA® Gateway. All configuration data will be lost!

Required service level: `Service`
Socket data type: `JSON text`

```json
{
    "Topic":"/Gateway/FactoryReset"
}
```

---

[Back to main page](../../README.md) | [Back to Websockets overview](../README.md)
