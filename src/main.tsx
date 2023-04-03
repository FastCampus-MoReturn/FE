import { Provider } from 'react-redux';
import CookiesProvider from 'react-cookie/cjs/CookiesProvider';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import App from './App';
import './index.css';
import GlobalStyle, { Container } from './styles/GlobalStyle';
import store from './store/store';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CookiesProvider>
    <Provider store={store}>
      <GlobalStyle />
      <App />
      <Container limit={1} />
    </Provider>
  </CookiesProvider>,
);
