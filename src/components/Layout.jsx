import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
