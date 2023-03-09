import { Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';

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
