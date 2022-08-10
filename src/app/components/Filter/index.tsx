import { Box } from '@chakra-ui/react';
import { AiOutlineSearch, DropdownIcon } from 'app/assets';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import Menu from '../Menu';
import MenuItem from '../Menu/MenuItem';
import Search from '../Search';

const Filter = () => {
  const { theme } = useThemeContext();
  return (
    <Box className="flex items-center" bgColor={theme.background} borderRadius={10} height={50} px={2}>
      <Menu title={'Tất cả sản phẩm'} rightIcon={<DropdownIcon />}>
        <MenuItem>HP</MenuItem>
        <MenuItem>DELL</MenuItem>
      </Menu>
      <div className="border-l-[1px]">
        <Search
          placeholder="Tìm kiếm"
          inputProps={{
            borderWidth: 0,
            focusBorderColor: theme.bgColor,
          }}
          rightIcon={
            <Box
              bgColor={theme.primary}
              px={3}
              py={2}
              borderRadius={5}
              color={theme.background}
              className="cursor-pointer"
            >
              <AiOutlineSearch fontSize={20} />
            </Box>
          }
        />
      </div>
    </Box>
  );
};
export default Filter;
