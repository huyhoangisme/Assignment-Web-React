import { Box } from '@chakra-ui/react';
import React from 'react';
import SlidebarItem from './SlidebarItem';
import { CgMenuLeft } from 'react-icons/cg';
const Slidebar = () => {
  return (
    <Box className="flex items-center py-1 space-x-10 font-bold uppercase" height="50px">
      <SlidebarItem
        path=""
        title="Danh mục sản phẩm"
        leftIcon={<CgMenuLeft fontSize="20px" style={{ marginRight: '20px' }} />}
        paddingRight="75px"
      />

      <SlidebarItem path="/" title="Trang chủ" />
      <SlidebarItem path="/gioithieu" title="Giới thiệu" />
      <SlidebarItem path="" title="Sản phẩm" />
      <SlidebarItem path="" title="Tin tức" />
      <SlidebarItem path="/lienhe" title="Liên hệ" />
    </Box>
  );
};
export default Slidebar;
