import fs from 'fs';

export const writeFile = async (path: string, data: Buffer): Promise<boolean> => {
  try {
    await fs.writeFileSync(path, data, {
      encoding: 'base64',
    });

    return true;
  } catch (err) {
    console.error(err);

    return false;
  }
};
