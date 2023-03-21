import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Modal from './components/ConfirmModal';

const App = () => {
  return (
    <BrowserRouter>
      <Router />
      <Modal />
    </BrowserRouter>
  );
};

export default App;
