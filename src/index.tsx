import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './store';
import { RootComponent } from './root-component';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <RootComponent />
    </React.StrictMode>
  </Provider>,
);
