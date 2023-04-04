import { Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import PdfSend from '@/pages/PdfSend';
import Commentary from '@/pages/Commentary';
import Explanation from '@/pages/Explanation';

const Router = () => {
  return (
    <Routes>
      <Route path="pdf-send" element={<PdfSend />} />
      <Route path="*" element={<NotFound />} />
      <Route path="commentary" element={<Commentary />} />
      <Route path="explanation" element={<Explanation />} />
    </Routes>
  );
};

export default Router;
