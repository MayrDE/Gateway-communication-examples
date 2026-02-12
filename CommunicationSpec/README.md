# Communication Specification

## Introduction

 This folder contains the exact communication schemes for the ROBA® gateway with the supported interfaces:

- REST-API
- MQTT
- WebSocket

## General Information

The documentation uses placeholders depending on the specific communication protocoll and your device. These are:

`{BaseURL}` base URL for REST-API use, e.g. `http://192.168.4.2` or `http://gateway-2521D0163`  
`{GatewayBaseTopic}` base topic for MQTT commands regarding gateway, e.g. `mayr/Gateway/2521D0163`  
`{RBCBaseTopic}` base topic for MQTT use, e.g. regarding brake-checker `mayr/RBC/1234D12345`

Please replace these placeholders with the actual values for your device and communication protocoll.

## Message List

### Gateway Set

- [Set ConfigAssistant](Gateway_Set_ConfigAssistant.md)
- [Set FactoryReset](Gateway_Set_FactoryReset.md)
- [Set GlobalLogLevel](Gateway_Set_GlobalLogLevel.md)
- [Set MqttSettings](Gateway_Set_MqttSettings.md)
- [Set Network](Gateway_Set_Network.md)
- [Set OneWireSettings](Gateway_Set_OneWireSettings.md)
- [Set Output](Gateway_Set_Output.md)
- [Set Restart](Gateway_Set_Restart.md)
- [Set ToslinkSettings](Gateway_Set_ToslinkSettings.md)

### Gateway Get

- [Get ConfigAssistant](Gateway_Get_ConfigAssistant.md)
- [Get GlobalLogLevel](Gateway_Get_GlobalLogLevel.md)
- [Get Id](Gateway_Get_Id.md)
- [Get Input](Gateway_Get_Input.md)
- [Get ModuleId](Gateway_Get_ModuleId.md)
- [Get MqttSettings](Gateway_Get_MqttSettings.md)
- [Get Network](Gateway_Get_Network.md)
- [Get OneWireData](Gateway_Get_OneWireData.md)
- [Get OneWireSettings](Gateway_Get_OneWireSettings.md)
- [Get Output](Gateway_Get_Output.md)
- [Get PCBSerialNumber](Gateway_Get_PCBSerialNumber.md)
- [Get Ping](Gateway_Get_Ping.md)
- [Get SDInfo](Gateway_Get_SDInfo.md)
- [Get ToslinkSettings](Gateway_Get_ToslinkSettings.md)
- [Get Uptime](Gateway_Get_Uptime.md)
- [Get Version](Gateway_Get_Version.md)

### Gateway Response

- [Response ConfigAssistant](Gateway_Response_ConfigAssistant.md)
- [Response ConfigConfirm](Gateway_Response_ConfigConfirm.md)
- [Response General](Gateway_Response_General.md)
- [Response GlobalLogLevel](Gateway_Response_GlobalLogLevel.md)
- [Response Id](Gateway_Response_Id.md)
- [Response Input](Gateway_Response_Input.md)
- [Response ModuleId](Gateway_Response_ModuleId.md)
- [Response MqttSettings](Gateway_Response_MqttSettings.md)
- [Response Network](Gateway_Response_Network.md)
- [Response OneWireData](Gateway_Response_OneWireData.md)
- [Response OneWireSettings](Gateway_Response_OneWireSettings.md)
- [Response Output](Gateway_Response_Output.md)
- [Response PCBSerialNumber](Gateway_Response_PCBSerialNumber.md)
- [Response Ping](Gateway_Response_Ping.md)
- [Response SDInfo](Gateway_Response_SDInfo.md)
- [Response ToslinkSettings](Gateway_Response_ToslinkSettings.md)
- [Response Uptime](Gateway_Response_Uptime.md)
- [Response Version](Gateway_Response_Version.md)

### RBC Set

- [Set Config](RBC_Set_Config.md)
- [Set Reset](RBC_Set_Reset.md)

### RBC Get

- [Get Config](RBC_Get_Config.md)
- [Get CurrentValues](RBC_Get_CurrentValues.md)
- [Get CycleData](RBC_Get_CycleData.md)
- [Get Info](RBC_Get_Info.md)
- [Get TransmitRate](RBC_Get_TransmitRate.md)

### RBC Response

- [Response Config](RBC_Response_Config.md)
- [Response CurrentValues](RBC_Response_CurrentValues.md)
- [Response CycleData](RBC_Response_CycleData.md)
- [Response Info](RBC_Response_Info.md)
- [Response TransmitRate](RBC_Response_TransmitRate.md)

---

[Back to ROBA® gateway main page](../README.md)
