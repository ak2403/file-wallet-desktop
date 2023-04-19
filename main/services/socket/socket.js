import io from 'socket.io-client';
import { getSystemInfo } from '../../utils/system_information';
import { readFile, readFolder } from '../../utils/file_system';

export const InitializeSocket = async (window) => {
  const { machineId } = await getSystemInfo();

  const machineChannel = io(`http://10.0.0.18:3000/${machineId}`, { transports: ['websocket'] });

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
    const { requestSource, path } = data;
    console.log('downlaod path type : ', path);
    const response = await readFile(path);

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
  machineChannel.on('receive-file-transfer-from-server', function (data) {
    window.webContents.send('target-file-data-received', data);
  });

  machineChannel.on('target-not-active', function (data) {
    window.webContents.send('received-target-status', data);
  });
};
