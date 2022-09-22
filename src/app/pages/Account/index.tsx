import { Box, Spinner, Text } from '@chakra-ui/react';
import { useAuthContext } from 'app/components/Auth/AuthContext';
import SlidebarItem from 'app/components/Slidebar/SlidebarItem';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import { Outlet } from 'react-router-dom';
export const Account = () => {
  const { theme } = useThemeContext();
  const { loading, currentUser } = useAuthContext();
  if (loading) <Spinner />;
  return (
    <Box px="100px" py="12px">
      <Box className="flex space-x-10">
        <Box>
          <Box py="12px">
            <Text color={theme.textColor} fontSize="19px" className="uppercase">
              Trang tài khoản
            </Text>
            {currentUser ? (
              <Box color={theme.bgColor} fontSize="15px">{`Xin chào, ${currentUser?.name}`}</Box>
            ) : undefined}
          </Box>

          <SlidebarItem path="/account" title="Thông tin tài khoản" className="py-2" />
          <SlidebarItem path="/account/changepassword" title="Đổi mật khẩu" className="py-2" />
          <SlidebarItem title="Cập nhật thông tin" path="/account/updateprofile" className="py-2" />
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
};
