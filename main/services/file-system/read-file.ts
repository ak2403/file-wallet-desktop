import fs from 'fs';
import { extname } from 'path';

import { RootUserName } from './config';
import { ReadFile } from '../../types/services';

export const readFile = async (filePath: string = ''): Promise<ReadFile | null> => {
  try {
    const fileType = extname(`${RootUserName}/${filePath}`);

    const fileData = await fs.readFileSync(`${RootUserName}/${filePath}`);

    const fileBuffer = Buffer.from(fileData);

    return {
      type: fileType,
      buffer: fileBuffer,
    };
  } catch (err) {
    console.log(err);
    return null;
  }
};
