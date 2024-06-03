import { machineIdSync } from 'node-machine-id';

export class MachineIdenity {
  static getMachineId(): string {
    return machineIdSync(true);
  }
}
