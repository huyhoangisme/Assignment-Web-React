import { Box } from '@chakra-ui/react';

import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import { Link } from 'react-router-dom';
import Filter from '../Filter';
import LogoApp from './Logo';
const Header = () => {
  const { theme } = useThemeContext();

  return (
    <Box bgColor={theme.bgColor} height={100} fontSize={14}>
      <div className="flex items-center h-full">
        <LogoApp />
        <Filter />
        <div className="space-x-4">
          <Link to="register">Đăng kí</Link>
          <Link to="login">Đăng nhập</Link>
        </div>
      </div>
    </Box>
  );
};
export default Header;
