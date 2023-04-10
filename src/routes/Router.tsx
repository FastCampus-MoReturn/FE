import { Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import Commentary from '@/pages/Commentary';
import InfoCheckPage from '@/pages/InfoCheckPage';
import PdfStep from '@/pages/PdfStep';
import PdfCommentary2 from '@/pages/PdfCommentary2';
import Dictionary from '@/pages/Dictionary';
import Explanation from '@/pages/Explanation';

const Router = () => {
  return (
    <Routes>
      <Route path="infocheck" element={<InfoCheckPage />} />
      <Route path="dictionary" element={<Dictionary />} />
      <Route path="step" element={<PdfStep />} />
      <Route path="/" element={<PdfStep />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
