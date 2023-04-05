import { Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import PdfSend from '@/pages/PdfSend';
import Commentary from '@/pages/Commentary';
import PDFComp from '@/components/pdf-send/PDFComp';
import InfoCheckPage from '@/pages/InfoCheckPage';
import Explanation from '@/pages/Explanation';

const Router = () => {
  return (
    <Routes>
      <Route path="infocheck" element={<InfoCheckPage />} />
      <Route path="pdf-send" element={<PdfSend />} />
      <Route path="pdf" element={<PDFComp />} />
      <Route path="commentary" element={<Commentary />} />
      <Route path="*" element={<NotFound />} />
      <Route path="explanation" element={<Explanation />} />
    </Routes>
  );
};

export default Router;
