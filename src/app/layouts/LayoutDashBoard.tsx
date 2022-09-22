import { Box } from '@chakra-ui/react';
import LogoApp from 'app/components/Header/Logo';
import SidebarDashBoard from 'app/components/Slidebar/SidebarDashBoard';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const LayoutDashBoard = () => {
  const { theme } = useThemeContext();
  const navigate = useNavigate();
  return (
    <div>
      <Box bgColor={theme.bgColor} py="12px" className="flex justify-between items-center px-5">
        <LogoApp />
        <Box color={theme.background} fontSize="15px" className="cursor-pointer" onClick={() => navigate('/')}>
          Đi tới trang chủ
        </Box>
      </Box>
      <div className="flex justify-between space-x-10 ">
        <SidebarDashBoard />
        <Box w="full" py="20px">
          <Outlet />
        </Box>
      </div>
    </div>
  );
};
