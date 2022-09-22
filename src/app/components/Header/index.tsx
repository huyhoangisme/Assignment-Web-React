import { Box, Spinner, Text } from '@chakra-ui/react';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../Auth/AuthContext';
import Button from '../Button';
import CartGroup from '../CartGroup';
import Filter from '../Filter';
import Slidebar from '../Slidebar';
import SlidebarItem from '../Slidebar/SlidebarItem';
import LogoApp from './Logo';
const Header = () => {
  const { theme } = useThemeContext();
  const { loading, currentUser } = useAuthContext();
  if (loading) return <Spinner color={theme.bgColor} />;
  return (
    <Box bgColor={theme.bgColor} fontSize={14}>
      <Box className="flex items-center justify-between h-full px-[100px] border-b" height="100px">
        <LogoApp />
        <Box className="mx-[50px]">
          <Filter />
        </Box>
        {currentUser ? (
          <CartGroup mode="hover" title={`Xin chào, ${currentUser?.email}`}>
            <Box w="full" className="text-center">
              <Box className="border-b" py="5px">
                <SlidebarItem path="/account" title="Tài khoản" fontSize="14px" />
              </Box>
              {currentUser.role === 'admin' && (
                <Box className="border-b" py="5px">
                  <SlidebarItem path="/dashboard" title="Trang quản lý" fontSize="14px" />
                </Box>
              )}
            </Box>
          </CartGroup>
        ) : (
          <Box className="space-x-4">
            <Link to="register">Đăng kí</Link>
            <Link to="login">Đăng nhập</Link>
          </Box>
        )}

        <Button
          leftIcon={
            <Box>
              <AiOutlineShoppingCart fontSize="24" />
              <Text
                fontSize="12"
                className="absolute top-0.5 left-7 rounded-full"
                bgColor={theme.primary}
                color={theme.background}
                height="18px"
                w="18px"
              >
                1
              </Text>
            </Box>
          }
          bgColor="transparent"
          fontSize="14px"
          fontWeight="400"
          _hover={{ bgColor: 'transparent' }}
          _active={{ bgColor: 'transparent' }}
        >
          Giỏ hàng
        </Button>
      </Box>
      <Box bgColor="inherit" mt="1px" px="100px">
        <Slidebar />
      </Box>
    </Box>
  );
};
export default Header;
