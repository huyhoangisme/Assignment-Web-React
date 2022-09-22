import { Box, Spinner } from '@chakra-ui/react';
import { Product } from 'app/api/products';

import Products from 'app/components/Products';
import ProductItem from 'app/components/Products/ProductItem';
import { allProductsSelector, loadingSelector, productsActions } from 'app/redux/products/productsSlice';
import { useAppDispatch, useAppSelector } from 'app/redux/root';
import React, { useEffect } from 'react';
import { SwiperSlide } from 'swiper/react';

const OutstandingProducts = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(loadingSelector);
  const products = useAppSelector(allProductsSelector);
  if (loading) <Spinner />;
  useEffect(() => {
    dispatch(productsActions.getAllProductsStart());
  }, [dispatch]);
  return (
    <Box>
      <Products title="sản phẩm nổi bật">
        {products
          ? products?.map((product, index) => {
              return (
                <SwiperSlide className="flex items-center justify-center p-0 !rounded-lg" key={index}>
                  <ProductItem {...(product as Product)} />
                </SwiperSlide>
              );
            })
          : 'Sản phẩm đang được cập nhật'}
      </Products>
    </Box>
  );
};
export default OutstandingProducts;
