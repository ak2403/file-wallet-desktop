import io from 'socket.io-client';

import { systemInformation } from '../common';
import { readFile, readFolder, writeFile } from '../file-system';

export const InitializeSocket = async (window): Promise<void> => {
  const systemInfo = await systemInformation();

  if (!systemInfo) {
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
    const { requestSource, path } = data;

    const response = await readFolder(path);

    machineChannel.emit('send-information-to-server', {
      requestSource,
      response,
    });
  });

  // triggered when server request for folder transfer
  machineChannel.on('request-transfer-from-server', async function (data) {
    const { requestSource, transferFilePath } = data;

    const response = await readFile(transferFilePath);

    machineChannel.emit('transfer-file-to-server', {
      requestSource,
      response,
      ...data,
    });
  });

  // triggered when server sends the requested folder informations
  machineChannel.on('receive-information-from-server', function (data) {
    window.webContents.send('target-data-received', data);
  });

  // triggered when server sends the requested file transfer
  machineChannel.on('receive-file-transfer-from-server', async function (data) {
    const { targetFilePath, targetFileName, response } = data;

    await writeFile(`${targetFilePath}/${targetFileName}`, response.buffer);

    // window.webContents.send('target-file-data-received', data);
    console.log('hi');
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
