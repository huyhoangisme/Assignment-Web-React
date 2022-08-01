import React from 'react';
import { MenuItem as MenuItemChakra, MenuItemProps as MenuItemChakraProps } from '@chakra-ui/react';
interface MenuItemFrops extends MenuItemChakraProps {
  children: React.ReactNode;
  onClick?: () => void;
}
const MenuItem: React.FC<MenuItemFrops> = ({ children, onClick, ...props }: MenuItemFrops) => {
  return (
    <MenuItemChakra {...props} className="font-roboto" _hover={{}} _active={{}} onClick={onClick}>
      {children}
    </MenuItemChakra>
  );
};
export default MenuItem;
