import { DialogFileInformation } from '../packages/types/src/services';

export interface ElectronAPI {
  dialog: {
    openFile: () => Promise<Partial<DialogFileInformation>>;
  };
  identity: {
    getId: () => string;
  };
  store: {
    getItem: <T>(key: string) => T;
    setItem: (key: string, value: unknown) => boolean;
    delItem: (key: string) => boolean;
  };
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
