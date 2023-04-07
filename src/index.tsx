import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';
import { RootComponent } from './root-component';

const wrappedApp = (
  <Provider store={Store}>
    <React.StrictMode>
      <RootComponent />
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(wrappedApp, document.getElementById('root'));
