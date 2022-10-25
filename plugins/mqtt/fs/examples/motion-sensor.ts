import { ScriptDevice } from "@scrypted/common/src/eval/monaco/script-device"; // SCRYPTED_FILTER_EXAMPLE_LINE
import { ScryptedDeviceBase, ScryptedInterface } from "@scrypted/sdk"; // SCRYPTED_FILTER_EXAMPLE_LINE
import { MqttClient } from "../../src/api/mqtt-client"; // SCRYPTED_FILTER_EXAMPLE_LINE
declare const device: ScriptDevice & ScryptedDeviceBase; // SCRYPTED_FILTER_EXAMPLE_LINE
declare const mqtt: MqttClient; // SCRYPTED_FILTER_EXAMPLE_LINE

mqtt.subscribe({
    // this example expects the device to publish either ON or OFF text values
    // to the mqtt endpoint.
    '/': value => device.motionDetected = value.text === 'ON',
});

mqtt.handleTypes(ScryptedInterface.MotionSensor);
