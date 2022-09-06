import { Box, Text } from '@chakra-ui/react';
import { auth } from 'app/api/auth';
import { Thumb1 } from 'app/assets/index';
import Button from 'app/components/Button';
import Carousel from 'app/components/Carousel';
import ChangeQuanityProduct from 'app/components/ChangeQuanityProduct';
import Modal from 'app/components/Modal';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
export const DetailProduct = () => {
  const { theme } = useThemeContext();
  const [quanity, setQuanity] = useState<number>(1);
  const navigate = useNavigate();
  const handleAddCart = () => {
    navigate('/product/cart');
  };
  useEffect(() => {
    (async () => {
      await auth.login('abc', 'xys');
    })();
  }, []);
  return (
    <Modal>
      <Box className="grid grid-cols-2 p-[20px] space-x-[40px]" color={theme.textColor} fontSize="14px">
        <Carousel isThumb>
          <SwiperSlide>
            <Box border="1px solid #e9edf5" borderRadius="5px">
              <img src={Thumb1} alt="" className="w-full pt-2" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box border="1px solid #e9edf5" borderRadius="5px">
              <img src={Thumb1} alt="" className="w-full pt-2" />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box border="1px solid #e9edf5" borderRadius="5px">
              <img src={Thumb1} alt="" className="w-full pt-2" />
            </Box>
          </SwiperSlide>
        </Carousel>

        <Box>
          <Text className="capitalize font-bold text-2xl">iPhone 13 pro max 256GB</Text>
          <Box className="flex my-3">
            <Text className="mr-5">
              Thương hiệu: <span className="text-[#f45c43]">Apple</span>
            </Text>
            <Text>
              Trạng thái: <span className="text-[#f45c43]">Hết hàng</span>
            </Text>
          </Box>
          <Box fontSize="28px" color={theme.bgColor} fontWeight="bold">
            32.000.000₫
          </Box>
          <Box className="mt-2">
            Dòng iPhone 12 được Apple áp dụng ngôn ngữ thiết kế tương tự iPhone 12 năm ngoái với phần cạnh viền máy được
            dát phẳng sang trọng cùng bốn góc được làm bo cong nhẹ, đây có thể được xem là một thiết kế hoài cổ từ dòng
            iPhone 5 trước đó. Vì thế mà iPhone 13 Pro Max nói riêng, cũng như dòng điện thoại iPhone 13 nói chung, cũng
            sẽ đi theo ngôn ngữ thiết kế này. Dòng iPhone 12 được Apple áp dụng ngôn ngữ thiết kế tương tự iPhone 12 năm
            ngoái với phần cạnh viền máy được dát phẳng sang trọng cùng bốn góc được làm bo cong nhẹ, đây có thể được
            xem là một thiết kế hoài cổ từ dòng iPhone 5 trước đó. Vì thế mà iPhone 13 Pro Max nói riêng, cũng như dòng
            điện thoại iPhone 13 nói chung, cũng sẽ đi theo ngôn ngữ thiết kế này.
          </Box>

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
            handleOnDecrease={() => setQuanity(prev => prev - 1)}
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
