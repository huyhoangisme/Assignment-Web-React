import { Box } from '@chakra-ui/react';
import { useNumberWithDot } from 'app/hooks/useNumberWithDot';
import { useAppDispatch } from 'app/redux/root';
import { shoppingCartActions } from 'app/redux/shoppingcarts/shoppingCartSlice';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React, { useState } from 'react';
import Button from '../Button';
export interface DetailCart {
  _id: string;
  name: string;
  price: number;
  images: string[];
  quanity: number;
}
interface CartItemProps {
  item: DetailCart;
}
const CartItem = ({ item }: CartItemProps) => {
  const { theme } = useThemeContext();
  const dispatch = useAppDispatch();
  const [size, setSize] = useState<number>(item.quanity);
  const handleRemoveFromCart = (id: string) => {
    dispatch(shoppingCartActions.removeFromCart(id));
  };
  return (
    <Box
      className="border flex items-center justify-between mb-4"
      fontSize="15px"
      borderRadius="8px"
      py="12px"
      px="20px"
    >
      <Box className="flex items-center space-x-4">
        <img src={`http://localhost:8000/imgs/products/${item.images[0]}`} alt="" className="h-[100px] w-[100px]" />
        <Box>
          <Box fontSize="15px">{item.name}</Box>
          <Box
            color={theme.bgColor}
            fontSize="13px"
            className="cursor-pointer"
            onClick={() => handleRemoveFromCart(item._id)}
          >
            Xóa
          </Box>
        </Box>
      </Box>
      <Box color={theme.bgColor} fontSize="14px">{`${useNumberWithDot(item.price)} ₫`}</Box>
      <Box className="flex  items-center ">
        <Box className="flex space-x-4">
          <Button variant="button-quanity" onClick={() => setSize(prev => prev - 1)}>
            &#8722;
          </Button>
          <Button variant="button-quanity" fontSize="14px">
            {size}
          </Button>
          <Button variant="button-quanity" onClick={() => setSize(prev => prev + 1)}>
            +
          </Button>
        </Box>
      </Box>
      <Box>
        <Box color="#707070" mb="10px" fontSize="14px">
          Tổng tiền:
        </Box>
        <Box color={theme.bgColor}>{`${useNumberWithDot(size * item.price)} ₫`}</Box>
      </Box>
    </Box>
  );
};
export default CartItem;
