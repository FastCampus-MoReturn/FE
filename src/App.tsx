import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
// import Modal from './components/ConfirmModal';
import { ModalProvider } from './contexts/modalContext';
import Sidebar from './components/Sidebar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
        <Sidebar />
      </BrowserRouter>
    </ModalProvider>
  );
};

export default App;
