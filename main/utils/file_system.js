import fs from 'fs';
import path, { extname } from 'path';
import { randomUUID } from 'crypto';

import Config from '../config';

const ROOT_PATH = `/Users/${Config.ROOT_USER}`;

const readFolder = async (path = '') => {
  try {
    const getRootFolder = await fs.readdirSync(`${ROOT_PATH}/${path}`);
    const getFoldersInfo = [];

    for (const file of getRootFolder) {
      const getFileStat = await fs.statSync(`${ROOT_PATH}/${path}/${file}`, {
        bigint: true,
      });

      if (file && file[0] !== '.') {
        getFoldersInfo.push({
          id: randomUUID(),
          name: file,
          ext: extname(file),
          type: getFileStat.isDirectory() ? 'folder' : 'file',
        });
      }
    }

    const sortedArr = getFoldersInfo.sort((a, b) => b.type.localeCompare(a.type) || a.name.localeCompare(b.name));

    return sortedArr;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const readFile = async (file_path) => {
  try {
    const getType = path.extname(`${ROOT_PATH}/${file_path}`);
    const getFileData = await fs.readFileSync(`${ROOT_PATH}/${file_path}`);

    const getBuffer = Buffer.from(getFileData);

    return {
      type: getType,
      buffer: getBuffer,
    };
  } catch (err) {
    console.log(err);
    return [];
  }
};

const fileExists = async (path) => {
  try {
    const isExists = await fs.existsSync(`${ROOT_PATH}/${path}`);

    return isExists;
  } catch (err) {
    return false;
  }
};

const createFolder = async (path, name = '') => {
  try {
    const isPathExists = await fileExists(path);

    if (!isPathExists && !name) {
      return false;
    }

    const checkIfFolderExists = await fileExists(`${path}/${name}`);
    if (!checkIfFolderExists) {
      await fs.mkdirSync(`${ROOT_PATH}/${path}/${name}`);
    }

    return true;
  } catch (err) {
    return false;
  }
};

const deleteFolder = async (path) => {
  try {
    const isPathExists = await fileExists(path);

    if (!isPathExists) {
      return false;
    }

    await fs.rmdirSync(`${ROOT_PATH}/${path}`);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const deleteFile = async (path) => {
  try {
    const isPathExists = await fileExists(path);

    if (!isPathExists) {
      return false;
    }

    await fs.rmdir(`${ROOT_PATH}/${path}`);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const writeFile = async (path, data) => {
  try {
    const isPathExists = await fileExists(path);

    console.log('isPathExists : ', isPathExists, path);
    if (isPathExists) {
      return false;
    }

    await fs.writeFileSync(`${ROOT_PATH}/${path}`, data, {
      encoding: 'base64',
    });

    return true;
  } catch (err) {
    return false;
  }
};

export { readFolder, readFile, fileExists, createFolder, deleteFolder, deleteFile, writeFile };
