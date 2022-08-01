import {
  Button,
  Menu as ChakraMenu,
  MenuButton,
  MenuButtonProps,
  MenuList,
  MenuListProps,
  MenuProps as ChakraMenuProps,
} from '@chakra-ui/react';
import React from 'react';
interface MenuProps extends ChakraMenuProps {
  children: React.ReactNode;
  rightIcon?: JSX.Element;
  buttonProps: MenuButtonProps;
  menuListProps: MenuListProps;
  label: string;
}
const Menu: React.FC<MenuProps> = ({ label, children, rightIcon, buttonProps, menuListProps, ...props }: MenuProps) => {
  return (
    <ChakraMenu {...props}>
      <MenuButton
        as={Button}
        _active={{}}
        _hover={{}}
        rightIcon={rightIcon}
        pl="0"
        className="font-roboto"
        {...buttonProps}
      >
        {label}
      </MenuButton>
      <MenuList {...menuListProps}>{children}</MenuList>
    </ChakraMenu>
  );
};
export default Menu;
