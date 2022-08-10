import { MenuItem as MenuItemChakra, MenuItemProps } from '@chakra-ui/react';
import React from 'react';
interface Props {
  children: React.ReactNode;
  onCLick?: () => void;
  menuItemProps?: MenuItemProps;
}
const MenuItem: React.FC<Props> = ({ children, onCLick, menuItemProps, ...props }: Props) => {
  return (
    <MenuItemChakra
      {...menuItemProps}
      _hover={{}}
      _active={{}}
      fontSize={13}
      className="leading-[30px]"
      {...props}
      onClick={onCLick}
    >
      {children}
    </MenuItemChakra>
  );
};
export default MenuItem;
