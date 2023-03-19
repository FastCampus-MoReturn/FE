import { Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import PdfSend from '@/pages/PdfSend';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/*">
          <Route path="pdf-send" element={<PdfSend />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
