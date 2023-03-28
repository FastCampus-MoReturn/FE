import { Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import PdfSend from '@/pages/PdfSend';
import Commentary from '@/pages/Commentary';
import PDFComp from '@/components/pdf-send/PDFInput';

const Router = () => {
  return (
    <Routes>
      <Route path="pdf-send" element={<PdfSend />} />
      <Route path="pdf" element={<PDFComp />} />
      <Route path="commentary" element={<Commentary />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
