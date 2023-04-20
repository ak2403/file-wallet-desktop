import fs from 'fs';
import { extname } from 'path';
import { v4 as uuid } from 'uuid';

import { RootUserName } from './config';
import { FolderStructure, StructureType } from '../../types/services';

export const readFolder = async (path: string = ''): Promise<FolderStructure[]> => {
  try {
    const folderInformation = await fs.readdirSync(`${RootUserName}/${path}`);
    const folderDirectories: FolderStructure[] = [];

    for (const file of folderInformation) {
      const fileStat = await fs.statSync(`${RootUserName}/${path}/${file}`, {
        bigint: true,
      });

      if (file && file[0] !== '.') {
        folderDirectories.push({
          id: uuid(),
          name: file,
          ext: fileStat.isDirectory() ? 'folder' : extname(file),
          type: fileStat.isDirectory() ? StructureType.Folder : StructureType.File,
        });
      }
    }

    return folderDirectories.sort((a, b) => b.type.localeCompare(a.type) || a.name.localeCompare(b.name));
  } catch (err) {
    console.log(err);

    return [];
  }
};
