export type FolderStructureAction = {
  type: string;
  payload: any[];
  connectionId?: string;
};

export type FolderStructureState = {
  connectionId: string;
  selectedPath: SelectedPathType[];
};

export type SelectedPathType = {
  id: string;
  name: string;
};

export const FolderStructureTypes = {
  UpdateSelectedPath: 'UpdateSelectedPath',
  UpdateConnectionId: 'UpdateConnectionId',
};
