# MQTT Topics and Settings

## Topics

### Gateway Topics

- **Update**: `<topicBase>/Gateway/<mqttModuleId>/Update`
  - Callback: `OnUpdateGateway`
  - Purpose: Trigger a gateway update.

- **Reset**: `<topicBase>/Gateway/<mqttModuleId>/Reset`
  - Callback: `OnResetGateway`
  - Purpose: Reset the gateway.

- **Outputs**
  - **Set Output 0**: `<topicBase>/Gateway/<mqttModuleId>/Outputs/0/Set`
    - Callback: `OnSetOutput0`
    - Purpose: Set the state of output 0.
  - **Set Output 1**: `<topicBase>/Gateway/<mqttModuleId>/Outputs/1/Set`
    - Callback: `OnSetOutput1`
    - Purpose: Set the state of output 1.

### RBC Topics

- **Config Set**: `<topicBase>/RBC/<rbcSerialNumber>/Config/Set`
  - Callback: `OnConfig`
  - Purpose: Update RBC configuration.

- **Reset**: `<topicBase>/RBC/<rbcSerialNumber>/Reset`
  - Callback: `OnResetRBC`
  - Purpose: Reset the RBC module.

- **Cycle Data**: `<topicBase>/RBC/<rbcSerialNumber>/CycleData`
  - Purpose: Publish RBC cycle data.

- **Config**: `<topicBase>/RBC/<rbcSerialNumber>/Config`
  - Purpose: Publish RBC configuration.

- **Current Values**: `<topicBase>/Gateway/<mqttModuleId>/CurrentValues`
  - Purpose: Publish current values of the RBC.

### Discovery Topics

- **Gateway Discovery**: `<mqttSettings.GetDiscoTopic()>/<mqttModuleId>/config`
  - Purpose: Publish gateway discovery information.

- **RBC Discovery**: `<mqttSettings.GetDiscoTopic()>/<rbcSerialNumber>/config`
  - Purpose: Publish RBC discovery information.

### Sensor Topics

- **OneWire Sensors**: `<topicBase>/Gateway/<mqttModuleId>/Sensors/OneWire`
  - Purpose: Publish OneWire sensor data.

### Input/Output State Topics

- **Input State**: `<topicBase>/Gateway/<mqttModuleId>/Inputs/<number>`
  - Purpose: Publish the state of a specific input.

- **Output State**: `<topicBase>/Gateway/<mqttModuleId>/Outputs/<number>`
  - Purpose: Publish the state of a specific output.

## Settings

- **mqttModuleId**: Retrieved from `settings.getBoardSettings().GetSerialNumber()`.
- **topicBase**: Base topic from `mqttSettings.GetTopic()`.
- **gatewayDiscoveryTopic**: `<mqttSettings.GetDiscoTopic()>/<mqttModuleId>/config`.
- **rbcDiscoveryTopic**: `<mqttSettings.GetDiscoTopic()>/<rbcSerialNumber>/config`.
- **modulePath**: `<topicBase>/Gateway/<mqttModuleId>`.
- **errorTopic**: `<modulePath>/error`.
