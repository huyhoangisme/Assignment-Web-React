import { Box } from '@chakra-ui/react';
import { Product1 } from 'app/assets';
import Products from 'app/components/Products';
import ProductItem from 'app/components/Products/ProductItem';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

const OutstandingProducts = () => {
  return (
    <Box>
      <Products title="sản phẩm nổi bật">
        <SwiperSlide className="flex items-center justify-center p-0 !rounded-lg">
          <ProductItem productItem={{ name: 'hoang', src: Product1, labelButton: 'Buy', price: '10000' }} />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center p-0 !rounded-lg">
          <ProductItem productItem={{ name: 'Huy', src: Product1, labelButton: 'Buy', price: '10000' }} />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center p-0 !rounded-lg">
          <ProductItem productItem={{ name: 'hoang', src: Product1, labelButton: 'Buy', price: '10000' }} />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center p-0 !rounded-lg">
          <ProductItem productItem={{ name: 'hoang', src: Product1, labelButton: 'Buy', price: '10000' }} />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center p-0 !rounded-lg">
          <ProductItem productItem={{ name: 'hoang', src: Product1, labelButton: 'Buy', price: '10000' }} />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center p-0 !rounded-lg">
          <ProductItem productItem={{ name: 'hoang', src: Product1, labelButton: 'Buy', price: '10000' }} />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center p-0 !rounded-lg">
          <ProductItem productItem={{ name: 'hoang', src: Product1, labelButton: 'Buy', price: '10000' }} />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center p-0 !rounded-lg">
          <ProductItem productItem={{ name: 'hoang', src: Product1, labelButton: 'Buy', price: '10000' }} />
        </SwiperSlide>
      </Products>
    </Box>
  );
};
export default OutstandingProducts;
