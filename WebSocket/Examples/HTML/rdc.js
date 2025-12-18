function convertPayloadMessage(data, frame50Payload) {
    if (data instanceof ArrayBuffer) {
        frame50Payload.time = 0;
        frame50Payload.torque = 0;
        frame50Payload.speed = 0;
        frame50Payload.temp = 0;

        frame50Payload.id = 0
        frame50Payload.nextChannel = 0;
        frame50Payload.processState = 0;
        frame50Payload.payloadLength = 0;
        frame50Payload.packageNumber = 0;
        frame50Payload.transmitDataRate = 0;
        frame50Payload.averageSampleRate = 0;

        if (data.byteLength == 136) {
            const dataview = new DataView(data);

            let pos = 0;

            frame50Payload.id = dataview.getUint8(pos++);
            frame50Payload.nextChannel = dataview.getUint8(pos++);
            frame50Payload.processState = dataview.getUint8(pos++);
            frame50Payload.payloadLength = dataview.getUint8(pos++) >> 1;

            frame50Payload.packageNumber = dataview.getUint16(pos, true);
            pos += 2;
            frame50Payload.transmitDataRate = dataview.getUint16(pos, true);
            pos += 2;
            frame50Payload.averageSampleRate = dataview.getUint16(pos, true);
            pos += 2;

            frame50Payload.time = Number(Number(dataview.getBigUint64(pos, true)).toFixed(0));
            pos += 8;

            frame50Payload.torque = dataview.getInt16(pos, true);
            pos += 2;
            frame50Payload.speed = dataview.getInt16(pos, true);
            pos += 2;
            frame50Payload.temp = (dataview.getInt16(pos, true) * 0.1).toFixed(1);
            pos += 2;
            frame50Payload.voltage = dataview.getUint16(pos, true) * 0.001;
            pos += 2;
            frame50Payload.minHold = (dataview.getInt16(pos, true) * torqueScaler).toFixed(2);
            pos += 2;
            frame50Payload.maxHold = (dataview.getInt16(pos, true) * torqueScaler).toFixed(2);
            pos += 2;
            frame50Payload.accX = dataview.getInt16(pos, true);
            pos += 2;
            frame50Payload.accY = dataview.getInt16(pos, true);
            pos += 2;
            frame50Payload.accZ = dataview.getInt16(pos, true);
            pos += 2;

            if (frame50Payload.payloadLength != 0) {

                //const int16Payload = new Int16Array(data, 36, frame50Payload.payloadLength);
                for (let i = 0; i < frame50Payload.payloadLength; i++) {
                    frame50Payload.PayloadArray[i] = (dataview.getInt16(pos, true) * torqueScaler).toFixed(2);
                    pos += 2;
                }
            }

            return true;
        }
    }

    return false;
}
