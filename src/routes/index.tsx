import React from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import LogInPage from '../pages/login/login';
import SignUpPage from '../pages/signup/signup';
const AppRoutes = () => {
  return (
    // <React.Suspense fallback={<LoadingLayout>Loading...</LoadingLayout>}>
    <Routes>
      <Route path='/' element={<LogInPage />} />
      <Route path='/register' element={<SignUpPage />} />
    </Routes>
    // </React.Suspense>
  );
};

export default AppRoutes;
