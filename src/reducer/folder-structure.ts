import { FolderStructureState, FolderStructureAction, FolderStructureTypes } from '../types/reducer';

export const initialState: FolderStructureState = {
  connectionId: '',
  selectedPath: [],
  folders: [],
};

export function FolderStructureReducer(state = initialState, action: FolderStructureAction): FolderStructureState {
  switch (action.type) {
    case FolderStructureTypes.UpdateSelectedPath:
      return { ...state, selectedPath: action.payload };
    case FolderStructureTypes.UpdateConnectionId:
      return { ...state, connectionId: action.connectionId || '', selectedPath: [] };
    case FolderStructureTypes.UpdateFolders:
      const updatedFolders = action.folders || state.folders;

      return { ...state, folders: updatedFolders };
    default:
      return state;
  }
}
