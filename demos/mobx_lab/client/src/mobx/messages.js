import { observable, makeObservable } from 'mobx';
import { io } from "socket.io-client";

class Messages {
  constructor(fromName) {
    this.socket = io("http://localhost:5000");
    this.socket.on('message', this.newMessageReceived.bind(this));
  }

  sendMessage(to, text) {
    this.socket.emit('message', { text: 'hello world' });
  }

  newMessageReceived(msg) {
    console.log(msg);
  }
}

const messages = new Messages('ynon');
window.messages = messages;
export default messages;

