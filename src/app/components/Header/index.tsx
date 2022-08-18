import { Box } from '@chakra-ui/react';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Filter from '../Filter';
import Slidebar from '../Slidebar';

import CartInfo from './component/CartInfo';
import LogoApp from './Logo';
const Header = () => {
  const { theme } = useThemeContext();

  return (
    <Box bgColor={theme.bgColor} height={100} fontSize={14}>
      <Box className="flex items-center justify-between h-full px-[100px]">
        <LogoApp />
        <Box className="mx-[50px]">
          <Filter />
        </Box>
        <Box className="space-x-4">
          <Link to="register">Đăng kí</Link>
          <Link to="login">Đăng nhập</Link>
        </Box>
        <CartInfo title="Sản phẩm yêu thích" />
        <CartInfo title="Thông báo" />
      </Box>
      <Box bgColor="inherit" mt="1px" px="100px">
        <Slidebar />
      </Box>
      <Outlet />
    </Box>
  );
};
export default Header;
