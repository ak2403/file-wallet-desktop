import os from 'os';
import { machineIdSync } from 'node-machine-id';

class DeviceService {
  static async deviceId(): Promise<string> {
    return await machineIdSync(true);
  }

  static deviceOs(): string {
    return os.type();
  }
}

export { DeviceService };
