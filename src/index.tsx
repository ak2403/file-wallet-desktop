import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RootComponent } from './root-component';
import { store } from './store';

import 'rsuite/dist/rsuite.min.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

//@ts-ignore
if (module.hot) {
  //@ts-ignore
  module.hot.accept();
}

root.render(
  <Provider store={store}>
    <RootComponent />
  </Provider>,
);
