import io from 'socket.io-client';
import { getSystemInfo } from '../../utils/system_information';
import { readFile } from '../../utils/file_system';

export const InitializeSocket = async (window) => {
  const { machineId } = await getSystemInfo();
  console.log(machineId);
  const machineChannel = io(`http://10.0.0.18:3000/${machineId}`, { transports: ['websocket'] });

  machineChannel.on('request-information-from-server', async function (communicationId) {
    console.log('---request-information-from-server---', machineId);

    const data = await readFile();

    machineChannel.emit('send-information-to-server', {
      communicationId,
      data,
    });
  });

  machineChannel.on('receive-information-from-server', function (data) {
    console.log('---receive-information-from-server---');
    console.log(data);
  });
};
