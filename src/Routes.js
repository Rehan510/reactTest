import React, { Suspense, lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
// import Logo from './assets/images/oneload-logo.jpg';\
import Login from './sharedComponents/Login';
import AppLayout from './sharedComponents/Layouts/AppLayout';
const CampaignManagement = lazy(() => import('./component/campaignManagement'));
const ProtectedRoutes = lazy(() => import('./config/ProtectedRoutes'));
const SuspenseLoading = () => {
  return <h2>loading</h2>;
};
const MainRoutes = () => {
  const SidebarLayout = () => (
    <>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </>
  );
  return (
    <div className="app-wrapper">
      <Suspense fallback={<SuspenseLoading />}>
        <Routes>
          <Route element={<ProtectedRoutes isLoginRequired={false} />}>
            <Route path="/" element={<SidebarLayout />}>
              {/* <Route path="/" element={<Navigate replace to={`/communication`} />} /> */}
              <Route path="/communication" element={<CampaignManagement />} />
              <Route path="/history" element={<Login />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />

          {/* <Route path="*" element={<Info />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
};

export default MainRoutes;
