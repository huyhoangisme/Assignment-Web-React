import { Box } from '@chakra-ui/react';
import { useNumberWithDot } from 'app/hooks/useNumberWithDot';
import { useAppDispatch, useAppSelector } from 'app/redux/root';
import { cartItemsSelector, shoppingCartActions } from 'app/redux/shoppingcarts/shoppingCartSlice';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import CartItem, { DetailCart } from './CartItem';
const Cart = () => {
  const { theme } = useThemeContext();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(cartItemsSelector);
  useEffect(() => {
    dispatch(shoppingCartActions.getCartItems());
  }, [cartItems, dispatch]);
  return (
    <Box mt="18px">
      {cartItems &&
        cartItems?.map((item, index) => {
          return <CartItem item={item as DetailCart} key={index} />;
        })}

      <Box className="flex justify-end" fontSize="14px">
        <Box className="w-1/3 mb-3">
          <Box className="flex justify-between" color={theme.bgColor} my="10px">
            <Box color={theme.textColor}>Tổng tiền:</Box>
            <Box>{`${useNumberWithDot(10000000)} ₫`}</Box>
          </Box>
          <Link to="/checkout/1">
            <Button variant="button-outline" bgColor={theme.textColor} fontWeight="400">
              Thanh toán
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default Cart;
