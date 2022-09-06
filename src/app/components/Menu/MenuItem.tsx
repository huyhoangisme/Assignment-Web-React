import { MenuItem as MenuItemChakra, MenuItemProps } from '@chakra-ui/react';
import React from 'react';
import { SubMenuProps } from '../Nav/data';

interface Props {
  children: string;
  onClick?: () => void;
  menuItemProps?: MenuItemProps;
  subMenu?: SubMenuProps;
}
const MenuItem: React.FC<Props> = ({ children, onClick, menuItemProps, ...props }: Props) => {
  return (
    <MenuItemChakra
      {...menuItemProps}
      _hover={{}}
      _active={{}}
      fontSize={13}
      className="leading-[30px]"
      {...props}
      onClick={onClick}
    >
      {children}
    </MenuItemChakra>
  );
};
export default MenuItem;
