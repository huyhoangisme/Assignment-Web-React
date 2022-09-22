import { Box, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import React from 'react';
import Button from '../Button';
interface CartGroupProps {
  mode?: 'click' | 'hover';
  title?: string;
  leftIcon?: JSX.Element;
  children: React.ReactNode;
}
const CartGroup: React.FC<CartGroupProps> = ({ mode = 'click', title, leftIcon, children }: CartGroupProps) => {
  return (
    <Box className="relative">
      <Popover trigger={mode} placement="bottom">
        <PopoverTrigger>
          <Button
            fontSize="14px"
            bgColor="inherit"
            fontWeight={500}
            _hover={{ bg: 'inherit' }}
            _active={{ bg: 'inherit' }}
            leftIcon={leftIcon}
            px={0}
          >
            {title}
          </Button>
        </PopoverTrigger>
        <Box className="absolute left-0 ">
          <PopoverContent w="200px">
            <PopoverArrow />
            <PopoverBody>{children}</PopoverBody>
          </PopoverContent>
        </Box>
      </Popover>
    </Box>
  );
};
export default CartGroup;
