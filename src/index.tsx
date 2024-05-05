import ReactDOM from 'react-dom/client';
import { RootComponent } from './root-component';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

//@ts-ignore
if (module.hot) {
  //@ts-ignore
  module.hot.accept();
}

root.render(<RootComponent />);
