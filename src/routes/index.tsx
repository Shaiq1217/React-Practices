import { Route, Routes } from 'react-router-dom';
import LogInPage from '../pages/login/login';
import SignUpPage from '../pages/signup/signup';
import Applications from '../components/application/applications';

const AppRoutes = () => {
  return (
    // <React.Suspense fallback={<LoadingLayout>Loading...</LoadingLayout>}>
    <Routes>
      <Route path='/' element={<LogInPage />} />
      <Route path='/register' element={<SignUpPage />} />
      <Route path='/test' element={<Applications />} />
    </Routes>
    // </React.Suspense>
  );
};

export default AppRoutes;