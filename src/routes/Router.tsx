import { Route, Routes, Navigate } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import InfoCheckPage from '@/pages/InfoCheckPage';
import PdfStep from '@/pages/PdfStep';
import Dictionary from '@/pages/Dictionary';

const Router = () => {
  return (
    <Routes>
      <Route path="infocheck" element={<InfoCheckPage />} />
      <Route path="dictionary" element={<Dictionary />} />
      <Route path="step" element={<PdfStep />} />
      <Route path="/" element={<Navigate to="/step" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
