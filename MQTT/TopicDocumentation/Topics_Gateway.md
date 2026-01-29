# Gateway MQTT Topic Documentation

 This document provides an overview of the MQTT topics used by the ROBA® Gateway. It includes details on the published and subscribed topics, as well as the payload structure for each topic. For readability, following example values are used in the examples:

- Serial Number: `2521D00163`
- Topic Prefix: `mayr`
- Discovery Base Topic: `discovery`

## Table of Contents

- [Gateway MQTT Topic Documentation](#gateway-mqtt-topic-documentation)
- [Discovery Topics](#discovery-topics)
- [Published Topics](#published-topics)
  - [ErrorCode](#errorcode)
  - [Output State](#output-state)
  - [Input State](#input-state)
  - [OneWire Sensor Values](#onewire-sensor-values)
- [Subscribed Topics](#subscribed-topics)
  - [Reset](#reset)
  - [Set Output](#set-output)
  - [Update](#update)

## Discovery Topics

Topic `discovery/device/2521D00163/config`

<details><summary>Payload:</summary>

```json
{
    "cmps":
    {
        "2521D00163_input0":
        {
            "uniq_id":"2521D00163_input0",
            "name":"IN1 [Signal]",
            "p":"binary_sensor",
            "pl_on":"ON",
            "pl_off":"OFF",
            "stat_t":"Gateway/2521D00163/Inputs/0"
        },
        "2521D00163_input1":
            {
                "uniq_id":"2521D00163_input1",
                "name":"IN2 [Error]",
                "p":"binary_sensor",
                "pl_on":"ON",
                "pl_off":"OFF",
                "stat_t":"Gateway/2521D00163/Inputs/1"
            },
        "2521D00163_output0":
        {
            "uniq_id":"2521D00163_output0",
            "name":"OUT1 [Start]",
            "p":"switch",
            "pl_on":"ON",
            "pl_off":"OFF",
            "stat_t":"Gateway/2521D00163/Outputs/0",
            "cmd_t":"Gateway/2521D00163/Outputs/0/Set"
        },
        "2521D00163_output1":
        {
            "uniq_id":"2521D00163_output1",
            "name":"OUT2 [S/F]",
            "p":"switch",
            "pl_on":"ON",
            "pl_off":"OFF",
            "stat_t":"Gateway/2521D00163/Outputs/1",
            "cmd_t":"Gateway/2521D00163/Outputs/1/Set"
        },
        "2521D00163_reset":
        {
            "uniq_id":"2521D00163_reset",
            "name":"Restart Gateway",
            "p":"button",
            "cmd_t":"Gateway/2521D00163/Reset"
        },
        "2521D00163_temp":
        {"uniq_id":"2521D00163_temp",
        "name":"1Wire Temperature",
        "p":"sensor",
        "dev_cla":"temperature",
        "unit_of_meas":"°C",
        "val_tpl":"{{ value_json.Temperature | float | round(1) }}",
        "stat_t":"Gateway/2521D00163/Sensors/OneWire"
        }
    },
    "o":
    {
        "name":"Mayr",
        "sw":"2.2.2",
        "url":"https://www.mayr.com/en"
    },
    "dev":
    {
        "ids":"2521D00163",
        "name":"ROBA Gateway",
        "mf":"Mayr Antriebstechnik",
        "mdl":"080-600-2",
        "sw":"1.0.0",
        "hw":"1.0.1.0",
        "sn":"2521D00163"
    }
}
```

</details>

 # Published Topics

## ErrorCode

### Message

| Topic                         | Payload       |
|-------------------------------|---------------|
|`mayr/Gateway/2521D00163/error`|`{"Code":<errorcode>}`   |

`<errorcode>`:

- 0: Success
- 1: Bad Request
- 2: Action failed

## Output State

This is the state of a specific output from the ROBA® Gateway.
It is published automatically when the output state changes.

### Message

| Topic                                           | Payload       |
|-------------------------------------------------|---------------|
|`mayr/Gateway/2521D00163/Outputs/<outputnumber>` |`<state>`   |

`<outputnumber>`

- `0`: Output 0  
- `1`: Output 1

`<state>` values:

- `ON`: Output is high
- `OFF`: Output is low


## Input State

This is the state of a specific input from the ROBA® Gateway.
It is published automatically when the input state changes.

### Message

| Topic                                           | Payload       |
|-------------------------------------------------|---------------|
|`mayr/Gateway/2521D00163/Inputs/<inputnumber>` |`<state>`   |

`<inputnumber>`

- `0`: Input 0  
- `1`: Input 1

`<state>` values:

- `ON`: Input is high
- `OFF`: Input is low

## OneWire Sensor Values

This is the data from OneWire sensors connected to the ROBA® Gateway.
It is published automatically when new sensor data is available.
If now sensor is connected, no message is published.

### Message

| Topic                                           | Payload       |
|------------------------------------------|---------------|
|`mayr/Gateway/2521D00163/Sensors/OneWire` |<code><pre>{<br>    "Name": &lt;sensor_name&gt;,<br>    "Temperature": &lt;temperature_value&gt;, <br>    "Humidity": &lt;humidity_value&gt;<br>}</pre></code> |

`<sensor_name>` Name of the OneWire sensor

- `DS18B20`
- `DS18S20`
- `DHT11`
- `DHT22`


`<temperature_value>` Temperature value in °C (float), point as decimal separator

- e.g. 23.5
- `-127` indicates open sense line
- `-254` internal error

`<humidity_value>` Humidity value in % (float), point as decimal separator

- `0` if sensor does not support humidity measurement

## Subscribed Topics

### Reset

Performs a soft reset of the ROBA® Gateway.

#### Message

| Topic                         | Payload |
|-------------------------------|---------|
|`mayr/Gateway/2521D00163/Reset`|`none`   |

### Answer (Example)

| Answer Topic                                   |Answer Payload (Example) |
|------------------------------------------------|-------------------------|
|[`mayr/Gateway/2521D00163/error`](#errorcode)   | `{"Code":0}`            |

### Set Output

Set a output from the ROBA® Gateway

`<outputnumber>` can be '0' or '1'.

`<Payload>` can be `ON` or `OFF`.

### Message

| Topic                                              | Payload                  |
|----------------------------------------------------|--------------------------|
|`mayr/Gateway/2521D00163/Outputs/<outputnumber>/Set`|`ON`              |

### Answer (Example)

| Answer Topics                                          |Answer Payload           |
|--------------------------------------------------------|-------------------------|
|[`mayr/Gateway/2521D00163/error`](#errorcode)           | `{"Code":0}`            |
|[`mayr/Gateway/2521D00163/Outputs/0`](#output_state)    | `ON`                    |

## Update

Triggers a firmware update of the ROBA® Gateway.
> IMPORTANT:  
This feature is not implemented yet and will be available in a future firmware version.

### Message

| Topic                          | Payload |
|------------------------------- |---------|
|`mayr/Gateway/2521D00163/Update`|`none`   |
