import { FolderStructure } from '../data';

export type FolderStructureAction = {
  type: string;
  payload: any[];
  connectionId?: string;
  folders?: FolderStructure[];
};

export enum ConnectionStatus {
  Initialize = 'Initialize',
  Active = 'active',
  Inactive = 'inactive',
}

export type FolderStructureState = {
  connectionId: string;
  selectedPath: SelectedPathType[];
  folders: FolderStructure[];
  status: ConnectionStatus;
  blockInteraction: boolean;
};

export type SelectedPathType = {
  id: string;
  name: string;
};

export const FolderStructureTypes = {
  UpdateSelectedPath: 'UpdateSelectedPath',
  UpdateConnectionId: 'UpdateConnectionId',
  UpdateFolders: 'UpdateFolders',
  UpdateConnectionStatus: 'UpdateConnectionStatus',
};
