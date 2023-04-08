import io from 'socket.io-client';
import { get } from './api';
import { getItem, setItem } from './store';
import { readFolder, readFile, createFolder, writeFile } from './file_system';

class SocketConnection {
  constructor() {
    this.socketURI = 'http://localhost:3000/';
    this.communicationChannel = 'communications';
  }

  openConnectionChannel(ID = '') {
    if (ID) {
      const connectionChannel = io(`${this.socketURI}${ID}`, { transports: ['websocket'] });

      connectionChannel.on('connect', function () {
        console.log(`connection of ${ID} is alive`);
        const output = {
          status: true,
          message: 'alive',
        };
        connectionChannel.emit('redirectConnectionStatus', output);
      });

      connectionChannel.on('confirmConnectionStatus', function (params) {
        const output = {
          type: params.type,
          status: true,
          message: 'alive',
        };
        connectionChannel.emit('redirectConnectionStatus', output);
      });

      connectionChannel.on('redirectRequestInformation', async (params) => {
        const { type, path, name, file } = params;
        let output = {};

        switch (type) {
          case 'FETCH_FOLDERS':
            output = {
              type,
              status: true,
              data: await readFolder(path),
            };
            break;
          case 'ADD_FOLDER':
            const createdFolder = await createFolder(path, name);
            output.type = type;
            if (createdFolder) {
              output.status = true;
              output.data = await readFolder(path);
            } else {
              output.status = false;
            }
            break;
          case 'ADD_FILE':
            const createdFile = await writeFile(`${path}/${file.name}`, file.data);
            output.type = type;
            if (createdFile) {
              output.status = true;
            } else {
              output.status = false;
            }
            break;
          case 'FETCH_FILE':
            const retrieveFile = await readFile(path);
            output.type = type;
            output.data = retrieveFile;
            break;
          default:
            return;
        }

        connectionChannel.emit('captureResponse', output);
      });
    }
  }

  async openExistingConnections() {
    let getSavedConnections = await getItem('existingConnections');
    getSavedConnections = getSavedConnections ? JSON.parse(getSavedConnections) : [];

    if (getSavedConnections.length) {
      getSavedConnections.forEach((ID) => this.openConnectionChannel(ID));
    }
  }

  checkAndOpenConnection(connections = []) {
    connections.forEach((item) => {
      const socketConnection = io(`${this.socketURI}${item}`, { transports: ['websocket'] });

      if (!socketConnection.connected) {
        this.openConnectionChannel(item);
      }
    });
  }

  async checkAndCloseConnection() {
    let getSavedConnections = await getItem('existingConnections');
    getSavedConnections = getSavedConnections ? JSON.parse(getSavedConnections) : [];
    //TODO: check all connection disconnect
    getSavedConnections.forEach((item) => {
      const socketConnection = io(`${this.socketURI}${item}`, { transports: ['websocket'] });

      socketConnection.on('connect', function () {
        socketConnection.emit('disconnect-all');
      });
    });

    return true;
  }

  openCommunication(window) {
    const socketConnection = io(`${this.socketURI}${this.communicationChannel}`, { transports: ['websocket'] });

    socketConnection.on('connect', function () {
      console.log(`The common connection of channel is alive`);
    });

    socketConnection.on('onIncomingMessage', async (params) => {
      console.log('params : ', params);

      window.webContents.send('accessRequest', params);

      // const getId = await getItem('device_id');

      // if (params.id === getId) {
      //   const getConnections = await get('/connection');

      //   if (getConnections.status === 200 && getConnections?.data?.connections) {
      //     let getSavedConnections = await getItem('existingConnections');
      //     getSavedConnections = getSavedConnections ? JSON.parse(getSavedConnections) : [];

      //     getConnections.data.connections.forEach((item) => {
      //       if (!getSavedConnections.includes(item._id)) {
      //         getSavedConnections.push(item._id);
      //       }
      //     });

      //     await setItem('existingConnections', JSON.stringify(getSavedConnections));
      //   }
      // }
    });
  }
}

export default SocketConnection;
