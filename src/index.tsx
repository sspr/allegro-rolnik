import ReactDOM from 'react-dom';
import './index.css';
import { App } from './app/App';
import { AppProviders } from './providers/AppProviders';

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root'),
);
