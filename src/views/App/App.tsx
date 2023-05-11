import { Routes, Route, Navigate } from 'react-router-dom';
import { SignIn } from 'views/SignIn';

export const App: FC = () => (
  <Routes>
    <Route path='/' element={<SignIn />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);
