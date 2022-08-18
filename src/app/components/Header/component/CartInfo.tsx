import { AccordionIcon, Box, Text } from '@chakra-ui/react';
import Cart from 'app/components/Cart';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
interface Props {
  title: string;
  mode?: 'hover' | 'click';
}
const CartInfo: React.FC<Props> = ({ mode = 'hover', title }: Props) => {
  const { theme } = useThemeContext();
  return (
    <Cart
      title={title}
      mode={mode}
      leftIcon={
        <Box>
          <AiOutlineHeart fontSize="24" />
          <Text
            fontSize="12"
            className="absolute top-0.5 left-2 rounded-full"
            bgColor={theme.primary}
            color={theme.background}
            height="18px"
            w="18px"
          >
            10
          </Text>
        </Box>
      }
    >
      Tadaa!! The arrow color and background color is customized. Check the props for each component.555555
    </Cart>
  );
};
export default CartInfo;
