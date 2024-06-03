export interface ElectronAPI {
  store: {
    getItem: <T>(key: string) => T;
    setItem: (key: string, value: unknown) => boolean;
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
