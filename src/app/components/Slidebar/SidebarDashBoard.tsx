import { Box } from '@chakra-ui/react';
import React from 'react';
import SlidebarItem from './SlidebarItem';
const SidebarDashBoard = () => {
  return (
    <Box className="w-1/6 flex flex-col items-center " bgColor="#EBEBEB">
      <SlidebarItem path="/dashboard" title="Khách hàng" className="py-2" active w="full" />
      <SlidebarItem path="/dashboard/product" title="Sản phẩm" className="py-2" active w="full" />
    </Box>
  );
};
export default SidebarDashBoard;
