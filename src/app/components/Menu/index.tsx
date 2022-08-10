import React from 'react';
import {
  Button,
  Menu as MenuChakra,
  MenuButton as MenuButtonChakra,
  MenuButtonProps,
  MenuList as MenuListChakra,
  MenuListProps,
} from '@chakra-ui/react';
import { useThemeContext } from 'app/themes/ThemeProvider';
interface MenuProps {
  title: string;
  children: React.ReactNode;
  rightIcon?: React.ReactNode;
  menuButtonProps?: MenuButtonProps;
  menuListProps?: MenuListProps;
}
const Menu: React.FC<MenuProps> = ({
  title,
  children,
  rightIcon,
  menuButtonProps,
  menuListProps,
  ...props
}: MenuProps) => {
  const { theme } = useThemeContext();
  return (
    <MenuChakra {...props}>
      <MenuButtonChakra
        as={Button}
        px={4}
        py={2}
        borderRadius="20"
        rightIcon={rightIcon}
        _hover={{ bgColor: theme.background }}
        _active={{ bgColor: theme.background }}
        bgColor={theme.background}
        className="w-[180px] text-start"
        fontSize="14px"
        {...menuButtonProps}
      >
        {title}
      </MenuButtonChakra>
      <MenuListChakra {...menuListProps}>{children}</MenuListChakra>
    </MenuChakra>
  );
};
export default Menu;
