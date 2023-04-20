export type ReadFile = {
  type: string;
  buffer: Buffer;
};

export enum StructureType {
  Folder = 'folder',
  File = 'file',
}

export type FolderStructure = {
  id: string;
  name: string;
  ext: string;
  type: StructureType;
};
