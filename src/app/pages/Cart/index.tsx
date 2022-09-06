import { Box } from '@chakra-ui/react';
import React from 'react';
import DetailCart from './components/DetailCart';
export const Cart = () => {
  return (
    <Box px="100px">
      <Box fontSize="22px" my="15px">
        Giỏ hàng của bạn
      </Box>
      <DetailCart />
    </Box>
  );
};
