import { Box, Text } from '@chakra-ui/react';
import { Thumb1 } from 'app/assets/index';
import Button from 'app/components/Button';
import Modal from 'app/components/Modal';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import { useNavigate } from 'react-router-dom';
export const DetailProduct = () => {
  const { theme } = useThemeContext();
  const navigate = useNavigate();
  const handleAddCart = () => {
    navigate('/');
  };
  return (
    <Modal>
      <Box className="grid grid-cols-2 p-[20px] space-x-[40px]" color={theme.textColor} fontSize="14px">
        <Box px="40px" border="1px solid #e9edf5" borderRadius="10px">
          <img src={Thumb1} alt="" className="w-full py-5" />
        </Box>
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
            sẽ đi theo ngôn ngữ thiết kế này.
          </Box>

          <Box className="my-4 flex items-center space-x-5">
            <Text className="font-bold">Số lượng:</Text>
            <Box className="flex  items-center ">
              <Box className="flex space-x-4">
                <Button variant="button-quanity">&#8722;</Button>
                <Button variant="button-quanity" fontSize="14px">
                  1
                </Button>
                <Button variant="button-quanity">+</Button>
              </Box>
            </Box>
          </Box>
          <Button variant="button-outline" fontSize="14px" bgColor={theme.textColor} onClick={() => handleAddCart()}>
            Thêm vào giỏ hàng
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
