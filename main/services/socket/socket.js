import io from 'socket.io-client';
import { getSystemInfo } from '../../utils/system_information';
import { readFolder } from '../../utils/file_system';

export const InitializeSocket = async (window) => {
  const { machineId } = await getSystemInfo();
  console.log(machineId);
  const machineChannel = io(`http://10.0.0.18:3000/${machineId}`, { transports: ['websocket'] });

  // triggered when server send an notification action
  machineChannel.on('notification-from-server', function (notification) {
    window.webContents.send('do-action-for-notification', notification);
  });

  // triggered when server request for folder informations
  machineChannel.on('request-information-from-server', async function (data) {
    const { requestSource, path } = data;
    console.log('---request-information-from-server---', machineId);

    const response = await readFolder(path);

    machineChannel.emit('send-information-to-server', {
      requestSource,
      response,
    });
  });

  // triggered when server sends the requested folder informations
  machineChannel.on('receive-information-from-server', function (data) {
    console.log('---receive-information-from-server---');
    console.log(data);
    window.webContents.send('target-data-received', data);
  });
};
