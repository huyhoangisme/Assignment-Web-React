import { Box, Text } from '@chakra-ui/react';
import { Product } from 'app/api/products';
import Button from 'app/components/Button';
import Carousel from 'app/components/Carousel';
import ChangeQuanityProduct from 'app/components/ChangeQuanityProduct';
import Modal from 'app/components/Modal';
import { useNumberWithDot } from 'app/hooks/useNumberWithDot';
import { getProductByIdSelector } from 'app/redux/products/productsSlice';
import { useAppDispatch, useAppSelector } from 'app/redux/root';
import { shoppingCartActions } from 'app/redux/shoppingcarts/shoppingCartSlice';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
export const DetailProduct = () => {
  const { theme } = useThemeContext();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [quanity, setQuanity] = useState<number>(1);
  const product = useAppSelector(getProductByIdSelector);

  const handleAddCart = () => {
    if (!product) return null;
    else dispatch(shoppingCartActions.addToCartStart({ ...product, quanity } as Product));
    navigate('/product/cart');
  };
  return (
    <Modal>
      <Box className="grid grid-cols-2 p-[20px] space-x-[40px]" color={theme.textColor} fontSize="14px">
        {product?.images ? (
          <Carousel isThumb>
            {product?.images?.map((item, index) => (
              <SwiperSlide key={index}>
                <Box border="1px solid #e9edf5" borderRadius="5px">
                  <img src={`http://localhost:8000/imgs/products/${item}`} alt="" className="w-full pt-2" />
                </Box>
              </SwiperSlide>
            ))}
          </Carousel>
        ) : (
          'Hình ảnh đang được cập nhật'
        )}

        <Box>
          <Text className="capitalize font-bold text-2xl">{product?.name}</Text>
          <Box className="flex my-3">
            <Text className="mr-5">
              Thương hiệu: <span className="text-[#f45c43]">Apple</span>
            </Text>
            <Text>
              Trạng thái: <span className="text-[#f45c43]">Còn hàng</span>
            </Text>
          </Box>
          <Box fontSize="28px" color={theme.bgColor} fontWeight="bold">
            {`${useNumberWithDot(product?.price as number)} ₫`}
          </Box>
          <Box className="mt-2">{product?.description}</Box>

          <Box className="flex items-center space-x-4">
            <Box className="my-4" fontWeight="bold">
              Màu sắc:
            </Box>
            <Box className="space-x-3">
              <Button fontWeight="400">Bạc</Button>
              <Button fontWeight="400">Vàng</Button>
              <Button fontWeight="400">Xanh</Button>
              <Button fontWeight="400">Tím</Button>
            </Box>
          </Box>
          <ChangeQuanityProduct
            quanity={quanity}
            handleOnDecrease={() => setQuanity(prev => (prev === 1 ? prev : prev - 1))}
            handleOnIncrease={() => setQuanity(prev => prev + 1)}
          />
          <Button variant="button-outline" fontSize="14px" bgColor={theme.textColor} onClick={() => handleAddCart()}>
            Thêm vào giỏ hàng
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
