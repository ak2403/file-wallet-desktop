import { FolderStructure } from '../data';

export type FolderStructureAction = {
  type: string;
  payload: any[];
  connectionId?: string;
  folders?: FolderStructure[];
};

export type FolderStructureState = {
  connectionId: string;
  selectedPath: SelectedPathType[];
  folders: FolderStructure[];
};

export type SelectedPathType = {
  id: string;
  name: string;
};

export const FolderStructureTypes = {
  UpdateSelectedPath: 'UpdateSelectedPath',
  UpdateConnectionId: 'UpdateConnectionId',
  UpdateFolders: 'UpdateFolders',
};
