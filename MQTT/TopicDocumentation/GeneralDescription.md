## General MQTT Topic Description
 
 The regular topic structure used by the ROBA® Gateway in combination with a ROBA® break-checker is build from several parts:

 `[<topic_prefix>/]<device_identifier>/<serial_number>/<topic_specification>`


 1. **Topic Prefix**: optional
 
 This is a optional part set in the ROBA® Gateway MQTT settings. Default is empty. Refer to [Topic Prefix Section](../README.md#topic-prefix) for usage details. If not defined in MQTT settings, the topic starts directly with the device identifier.

 Example if topic prefix is defined in MQTT settings: `machine_1/Gateway/2521D00163/Outputs/0/Set`

if not: `Gateway/2521D00163/Outputs/0/Set`


2. **Device Identifier**

This part controls wether the topic is related to the ROBA® Gateway itself or to a connected ROBA® brake-checker®. It can be `Gateway` or `RBC` respectively.

3. **Serial Number**

Each ROBA® Gateway and ROBA® brake-checker has a unique serial number. This part of the topic is used to identify the specific device the topic is related to. It is important when multiple devices are used in one MQTT broker. Typical serial numbers look like `2521D00163` or `2521B00045` and can be found on the device label.

4. **Topic specification**

This part specifies the actual topic function, e.g. `Inputs/0` for  state of input 0, `Outputs/1/Set` for setting output 1 , `Config/Set` for setting configuration of the RBC etc. It can consist of one or multiple levels separated by `/`.


## Device Discovery Topics
The ROBA® Gateway supports MQTT device discovery for integration in home automation systems like Home Assistant. They will be sent automatically by the device, once it is connected to a MQTT server. The discovery topics are structured as follows:

`<discovery_base_topic>/device/<serial_number>/config`

- **Discovery Base Topic**
This part is configurable in the ROBA® Gateway MQTT settings. It has to match the discovery prefix configured in Home Assistant.

- **Serial Number**
This part contains the serial number of the ROBA® Gateway or ROBA® brake-checker respectively. It is assigned automatically.


## ROBA® Gateway Topics

[ROBA® Gateway Topics Overview](Topics_Gateway.md)

## ROBA® break-checker Topics

[ROBA® brake-checker® Topics Overview](Topics_RBC.md)





 


