import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import OutstandingProducts from './components/OutstandingProducts';
import SmartPhoneProduct from './components/SmartPhoneProduct';
export const Home = () => {
  return (
    <Box>
      <OutstandingProducts />
      <SmartPhoneProduct />
      <Outlet />
    </Box>
  );
};
