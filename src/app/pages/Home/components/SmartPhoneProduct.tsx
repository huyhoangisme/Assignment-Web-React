import { Box } from '@chakra-ui/react';
import { Product1 } from 'app/assets';
import Products from 'app/components/Products';
import ProductItem from 'app/components/Products/ProductItem';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

const SmartPhoneProduct = () => {
  return (
    <Box>
      <Products title="điện thoại thông minh">
        {/* <SwiperSlide className="flex items-center justify-center p-0 !rounded-lg">
          <ProductItem productItem={{ name: 'hoang', src: Product1, label: 'Buy', price: 10000 }} />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center p-0 !rounded-lg">
          <ProductItem productItem={{ name: 'hoang', src: Product1, label: 'Buy', price: 10000 }} />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center p-0 !rounded-lg">
          <ProductItem productItem={{ name: 'hoang', src: Product1, label: 'Buy', price: 10000 }} />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center p-0 !rounded-lg">
          <ProductItem productItem={{ name: 'hoang', src: Product1, label: 'Buy', price: 10000 }} />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center p-0 !rounded-lg">
          <ProductItem productItem={{ name: 'hoang', src: Product1, label: 'Buy', price: 10000 }} />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center p-0 !rounded-lg">
          <ProductItem productItem={{ name: 'hoang', src: Product1, label: 'Buy', price: 10000 }} />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center p-0 !rounded-lg">
          <ProductItem productItem={{ name: 'hoang', src: Product1, label: 'Buy', price: 10000 }} />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center p-0 !rounded-lg">
          <ProductItem productItem={{ name: 'hoang', src: Product1, label: 'Buy', price: 10000 }} />
        </SwiperSlide> */}
      </Products>
    </Box>
  );
};
export default SmartPhoneProduct;
