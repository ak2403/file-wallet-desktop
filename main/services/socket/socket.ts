import io from 'socket.io-client';

import { systemInformation } from '../common';
import { getKey } from '../local-storage';
import { readFile, readFolder, writeFile } from '../file-system';

export const InitializeSocket = async (window): Promise<void> => {
  const systemInfo = await systemInformation();
  const isDeviceRegistered = getKey('connection_id');

  if (!systemInfo || !isDeviceRegistered) {
    return;
  }

  const { machineId } = systemInfo;

  const machineChannel = io(`http://10.0.0.18:3000/${machineId}`, { transports: ['websocket'] });

  machineChannel.on('connect', () => {
    console.log('The machine communication is up and running with the server');
  });

  // triggered when server send an notification action
  machineChannel.on('active', function (callback) {
    callback(true);
  });

  // triggered when server send an notification action
  machineChannel.on('notification-from-server', function (notification) {
    window.webContents.send('do-action-for-notification', notification);
  });

  // triggered when server request for folder informations
  machineChannel.on('request-information-from-server', async function (data) {
    const { filePath } = data;

    machineChannel.emit('update-activity', {
      ...data,
      activityStatus: 'request-received',
    });

    const response = await readFolder(filePath);

    machineChannel.emit('send-information-to-server', {
      response,
      ...data,
    });
  });

  // triggered when server request for folder transfer
  machineChannel.on('request-transfer-from-server', async function (data) {
    const { filePath } = data;

    machineChannel.emit('update-activity', {
      ...data,
      activityStatus: 'request-received',
    });

    const response = await readFile(filePath);

    machineChannel.emit('transfer-file-to-server', {
      ...data,
      response,
    });
  });

  // triggered when server sends the requested folder informations
  machineChannel.on('receive-information-from-server', function (data) {
    const { response } = data;

    machineChannel.emit('update-activity', {
      ...data,
      activityStatus: 'file-received',
    });

    window.webContents.send('target-data-received', response);

    machineChannel.emit('update-activity', {
      ...data,
      activityStatus: 'file-saved',
    });
  });

  // triggered when server sends the requested file transfer
  machineChannel.on('receive-file-transfer-from-server', async function (data) {
    const { targetFilePath, targetFileName, response } = data;

    machineChannel.emit('update-activity', {
      ...data,
      activityStatus: 'file-received',
    });

    try {
      await writeFile(`${targetFilePath}/${targetFileName}`, response.buffer);

      machineChannel.emit('update-activity', {
        ...data,
        activityStatus: 'file-saved',
      });
    } catch (error) {
      machineChannel.emit('update-activity', {
        ...data,
        activityStatus: 'error',
        error: error.message || 'Internal Error',
      });
    }
  });

  machineChannel.on('target-not-active', function (data) {
    window.webContents.send('received-target-status', data);
  });

  machineChannel.on('connect_error', function (err) {
    console.log('-------Connection Error in machine socket communication-------');
    console.log(err);
    //do something
  });

  machineChannel.on('error', (error) => {
    console.log('-------Error in machine socket communication-------');
    console.log(error);
  });

  machineChannel.on('ping', () => {
    console.log('-------ping in machine socket communication-------');
  });

  machineChannel.on('reconnect_error', (error) => {
    console.log('-------reconnect error in machine socket communication-------');
    console.log(error);
  });

  machineChannel.on('reconnect_failed', (error) => {
    console.log('-------reconnect failed in machine socket communication-------');
    console.log(error);
  });
};
