import { Authentications } from './authentication';
import { ConnectionState } from './connection';
import { FolderStructureState } from './folder-structure';

export type ReducerState = {
  authentication: Authentications;
  connection: ConnectionState;
  folderStructure: FolderStructureState;
};
