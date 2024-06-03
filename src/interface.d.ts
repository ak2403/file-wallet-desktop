export interface ElectronAPI {
  store: {
    getItem: <T>(key: string) => T;
    setItem: (key: string, value: unknown) => boolean;
    delItem: (key: string) => boolean;
  };
  identity: {
    getId: () => string;
  };
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
