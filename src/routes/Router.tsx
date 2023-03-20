import { Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import PdfSend from '@/pages/PdfSend';
import Commentary from '@/pages/Commentary';

const Router = () => {
  return (
    <Routes>
      <Route path="pdf-send" element={<PdfSend />} />
      <Route path="*" element={<NotFound />} />
      <Route path="commentary" element={<Commentary />} />
    </Routes>
  );
};

export default Router;
