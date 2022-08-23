import { Box } from '@chakra-ui/react';
import { product1 } from 'app/assets';
import Product from 'app/components/Products';
import ProductItem from 'app/components/Products/ProductItem';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
export const Home = () => {
  return (
    <Box>
      <Product title="Danh sách sản phẩm">
        <SwiperSlide className="flex items-center justify-center p-0 !rounded-lg">
          <ProductItem productItem={{ name: 'hoang', src: product1, labelButton: 'Houy', price: '10000' }} />
        </SwiperSlide>
      </Product>
    </Box>
  );
};
