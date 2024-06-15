import fs from 'fs';
import mime from 'mime';

import { FileInformation } from '../../packages/types/src/services';

export class FileSystemService {
  static getFileInfo(filePath: string): FileInformation {
    try {
      const isFileExists = fs.existsSync(filePath);

      if (!isFileExists) {
        return {
          exists: false,
        };
      }

      const fileStats = fs.statSync(filePath);

      return {
        exists: true,
        stats: {
          filePath,
          fileType: mime.getType(filePath),
          size: fileStats.size,
        },
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}
