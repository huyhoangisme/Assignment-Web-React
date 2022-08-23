import Header from 'app/components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
