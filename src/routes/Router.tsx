import NotFound from '@/pages/NotFound';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
