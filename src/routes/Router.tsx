import { Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import PdfSend from '@/pages/PdfSend';

const Router = () => {
  return (
    <Routes>
      <Route path="pdf-send" element={<PdfSend />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
