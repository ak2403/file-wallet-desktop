import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Store from './store'
import App from './App';
import './styles/index.css'

const wrappedApp = <Provider store={Store}>
<React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>

ReactDOM.render(
  wrappedApp,
  document.getElementById('root')
);
