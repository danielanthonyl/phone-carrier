import { Routes, Route, Navigate } from 'react-router-dom';
import { KeepTalkingPage } from '../../views/KeepTalkingPage';

export const PublicRouter = () => (
  <Routes>
    <Route path="/keep-talking" element={<KeepTalkingPage />} />
    <Route path="/" element={<Navigate to="/keep-talking" />}></Route>
  </Routes>
);
