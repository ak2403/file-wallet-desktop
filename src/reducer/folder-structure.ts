import { FolderStructureState, FolderStructureAction, FolderStructureTypes, ConnectionStatus } from '../types/reducer';

export const initialState: FolderStructureState = {
  connectionId: '',
  selectedPath: [],
  folders: [],
  status: ConnectionStatus.Initialize,
};

export function FolderStructureReducer(state = initialState, action: FolderStructureAction): FolderStructureState {
  switch (action.type) {
    case FolderStructureTypes.UpdateSelectedPath:
      return { ...state, selectedPath: action.payload };
    case FolderStructureTypes.UpdateConnectionId:
      return { ...state, connectionId: action.connectionId || '', selectedPath: [] };
    case FolderStructureTypes.UpdateFolders:
      const updatedFolders = action.folders || state.folders;

      return { ...state, folders: updatedFolders, status: ConnectionStatus.Active };
    case FolderStructureTypes.UpdateConnectionStatus:
      const { connectionId } = state;

      if (connectionId === action.connectionId) {
        return {
          ...state,
          status: ConnectionStatus.Inactive,
          selectedPath: [],
          folders: [],
        };
      }

      return { ...state };
    default:
      return state;
  }
}
