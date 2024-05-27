export interface ElectronAPI {
    store: {
        getItem: <T>(key:string) => T,
        setItem: (key: string, value: unknown)=>boolean
    }
}

declare global {
  interface Window {
    electronAPI: ElectronAPI
  }
}