import logo from './logo.svg';
import io from 'socket.io-client'
import './App.css';

function App() {
  const socket = io('http://10.0.0.18:5000', { transports : ['websocket'] })

  socket.on('connect', function(){
    console.log("hi")
  });
  socket.on('tweet', (tweet) => {
    console.log('tweet', tweet);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloa
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
