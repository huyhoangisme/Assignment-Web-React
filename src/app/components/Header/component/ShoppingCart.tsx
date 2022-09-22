import { Box, Text } from '@chakra-ui/react';
import CartGroup from 'app/components/CartGroup';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
interface Props {
  title?: string;
  mode?: 'hover' | 'click';
}
const ShoppingCart: React.FC<Props> = ({ mode = 'hover', title }: Props) => {
  const { theme } = useThemeContext();
  return (
    <CartGroup
      title={title}
      mode={mode}
      leftIcon={
        <Box>
          <AiOutlineShoppingCart fontSize="24" />
          <Text
            fontSize="12"
            className="absolute top-0.5 right-1   rounded-full"
            bgColor={theme.primary}
            color={theme.background}
            height="18px"
            w="18px"
          >
            1
          </Text>
        </Box>
      }
    >
      hahah
    </CartGroup>
  );
};
export default ShoppingCart;
