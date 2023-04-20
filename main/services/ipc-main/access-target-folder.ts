import io from 'socket.io-client';

export const accessTargetFolder = (event, data): void => {
  const { connectionId, ...rest } = data;

  const connectionChannel = io(`http://10.0.0.18:3000/${connectionId}`, { transports: ['websocket'] });

  connectionChannel.emit('request-file-from-target', rest);
};
