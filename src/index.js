import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Store from './store'
import App from './App';
import './views/styles/index.scss'

const wrappedApp = <Provider store={Store}>
<React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>

ReactDOM.render(
  wrappedApp,
  document.body.appendChild(document.createElement("DIV"))
);
