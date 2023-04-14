import { combineReducers } from 'redux';
import { AuthenticationReducer } from './authentication';
import { ConnectionReducer } from './connection';
import { FolderStructureReducer } from './folder-structure';

export const Reducer = combineReducers({
  authentication: AuthenticationReducer,
  connection: ConnectionReducer,
  folderStructure: FolderStructureReducer,
});
