import { OnOff, ScryptedDeviceBase, Setting, Settings, SettingValue } from "@scrypted/sdk";
import type { HikvisionCamera } from "./main";

export class HikvisionSupplementalLight extends ScryptedDeviceBase implements OnOff, Settings {
    on: boolean = false;

    constructor(public camera: HikvisionCamera, nativeId: string) {
        super(nativeId);
    }

    async turnOn(): Promise<void> {
        this.on = true;
        await this.updateSupplementalLight();
    }

    async turnOff(): Promise<void> {
        this.on = false;
        await this.updateSupplementalLight();
    }

    private async updateSupplementalLight(): Promise<void> {
        const api = this.camera.getClient();
        await api.setSupplementLight({ on: this.on });
    }

    async getSettings(): Promise<Setting[]> {
        return [];
    }

    async putSetting(_key: string, _value: SettingValue): Promise<void> {
    }
}
