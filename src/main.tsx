import { Provider } from 'react-redux';
import CookiesProvider from 'react-cookie/cjs/CookiesProvider';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer } from 'react-toastify';
import App from './App';
import './index.css';
import GlobalStyle from './styles/GlobalStyle';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CookiesProvider>
    <Provider store={store}>
      <GlobalStyle />
      <App />
      <ToastContainer />
    </Provider>
  </CookiesProvider>,
);
