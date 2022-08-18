import { Box, BoxProps, Text } from '@chakra-ui/react';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
interface SlidebarItemProps extends BoxProps {
  path: string;
  title: string;
  leftIcon?: JSX.Element;
}
const SlidebarItem: React.FC<SlidebarItemProps> = ({ title, path, leftIcon, ...props }: SlidebarItemProps) => {
  const { theme } = useThemeContext();
  const location = useLocation();
  return (
    <Box
      fontSize="15px"
      color={location.pathname === path ? '#FFC107' : theme.background}
      className="font-roboto  leading-[36px]"
      _hover={{ color: '#FFC107' }}
      {...props}
    >
      <Link to={path} className="flex justify-between">
        {leftIcon && leftIcon}
        <Text noOfLines={1}>{title}</Text>
      </Link>
    </Box>
  );
};
export default SlidebarItem;
