import { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import messagesApi from './mobx/messages';

function ListMessages(props) {
  return <p>List Messages</p>
};

function SendMessage(props) {
  return <p>Send Message</p>
};

function App() {
  return (
    <div className="App">
      <SendMessage />
      <ListMessages />
    </div>
  );
}

export default App;
