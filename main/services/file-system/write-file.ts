import fs from 'fs';

export const writeFile = async (path: string, data: Buffer): Promise<boolean> => {
  await fs.writeFileSync(path, data, {
    encoding: 'base64',
  });

  return true;
};
