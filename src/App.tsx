import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
// import Modal from './components/ConfirmModal';
import { ModalProvider } from './contexts/modalContext';

const App = () => {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ModalProvider>
  );
};

export default App;
