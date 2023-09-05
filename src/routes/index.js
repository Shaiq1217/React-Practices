import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";

const AppRoutes = () => {
  return (
    // <React.Suspense fallback={<LoadingLayout>Loading...</LoadingLayout>}>
    <Routes>
      <Route path="/login" element={Login} />
    </Routes>
    // </React.Suspense>
  );
};

export default AppRoutes;
