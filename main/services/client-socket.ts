import { io } from 'socket.io-client';

export class ClientSocket {
  constructor() {}

  connect() {
    const socket = io('ws://localhost:3000');

    socket.on('connect', () => {
      console.log('connected to server');
    });
  }
}
