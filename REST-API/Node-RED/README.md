# ROBA® gateway Node-RED examples

## Table of contents

1. [Introduction](#introduction)
1. [Supported Versions](#supported-versions)
1. [Starting node-red locally](#starting-node-red-locally)
1. [Testing the flow](#testing-the-flow)
1. [Limits of the example](#limits-of-the-example)

## Introduction

Node-RED is a powerful visual programming tool specifically designed for integrating hardware devices,  
APIs and online services. It allows you to create flows by connecting nodes, each of which performs a specific function.

In this flow, some commands from the REST service of the gateway are executed as examples.
Node-Red can be downloaded here [https://nodered.org/](https://nodered.org/).
Please refer to the official Node-RED documentation for installation and setup instructions.

## Supported Versions

This documentation was created using the following versions. It may work with other  versions, but this is not guaranteed.

| Module                | Version     |
|:--------------        |:------------|
| Node-RED              | `4.1.3`     |
| node.js               | `18.17.1`   |
| ROBA® gateway FW      | `1.0.0`     |
| ROBA® gateway FS      | `1.0.0`     |
| ROBA® brake-checker®  | `4.0.0`     |

## Starting node-red locally

To start Node-RED locally, open a terminal or command prompt and run the following command:

```bash
node-red
```

This will start the Node-RED server, and you can access the Node-RED editor by opening a web browser and navigating to `http://localhost:1880`.

To import the example flow, click on the menu button in the top right corner of the Node-RED editor, and select "Import".

![Import](Assets/00_ImportJson.png)

You can now either copy and paste the [example flow JSON](flows.json) directly or upload the file using the file upload option.

![SelectFlow](Assets/01_SelectFlow.png)

In order to change the gateway hostname and password double click the "EDIT ME: init"-function node.

![SelectEditNode](Assets/02_SelectEDITMENode.png)

Modify the hostname to match your gateway hostname. Please use the syntax `"gateway-"<serialnumber>"/"` e.g. `gateway-2521d00163/`. You can also use the IP address of the gateway if preferred, e.g. `192.168.4.2` (default IP address), when you are using a direct Ethernet connection.

Modify also the user level and the password. For generating the password please refer to [Password Generation](../../Readme.md#password-generation).

After making the changes, click "Fertig" (top right corner) to close the edit window.

![ModifyHostname](Assets/03_EditCredentials.png)

Click "Übernahme (deploy)" to deploy the changes.
![DeployChanges](Assets/04_Deploy.png)

## Testing the flow

Once everything is set up, you can test the flow.

1. Open the debugger view by clicking on the bug icon in the top right corner of the Node-RED editor.
2. Click the marked GET Id button to send a request to the gateway.
3. Now you should see the response from the gateway in the debug panel.

![FlowTesting](Assets/05_TestingFlow.png)

## Limits of the example

This example flow is intended for demonstration purposes only. It does definitely cover not all use cases and possibilities of the gateway REST-API. For complete documentation please refer to the [CommunicationSpec](../../CommunicationSpec/README.md).

Feel free to modify and expand the flow according to your specific requirements and use cases.

[Back to REST-API overview](../README.md)
