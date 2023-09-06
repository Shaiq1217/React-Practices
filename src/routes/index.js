import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LogInPage from '../pages/login/login';

const AppRoutes = () => {
  return (
    // <React.Suspense fallback={<LoadingLayout>Loading...</LoadingLayout>}>
    <Routes>
      <Route path='/login' element={<LogInPage />} />
    </Routes>
    // </React.Suspense>
  );
};

export default AppRoutes;
