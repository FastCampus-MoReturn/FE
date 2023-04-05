import { Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import PdfSend from '@/pages/PdfSend';
import PDFComp from '@/components/pdf-send/PDFComp';
import InfoCheckPage from '@/pages/InfoCheckPage';
import PdfCommentary2 from '@/pages/PdfCommentary2';

const Router = () => {
  return (
    <Routes>
      <Route path="infocheck" element={<InfoCheckPage />} />
      <Route path="pdf-send" element={<PdfSend />} />
      <Route path="pdf" element={<PDFComp />} />
      <Route path="commentary" element={<PdfCommentary2 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
