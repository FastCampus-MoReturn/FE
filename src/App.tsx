import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
// import Modal from './components/ConfirmModal';
import { ModalProvider } from './contexts/modalContext';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Router />
        <Sidebar />
      </BrowserRouter>
    </ModalProvider>
  );
};

export default App;
