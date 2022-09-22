import { Box, Text } from '@chakra-ui/react';
import { useAuthContext } from 'app/components/Auth/AuthContext';
import React from 'react';
export const Information = () => {
  const { currentUser } = useAuthContext();
  return (
    <Box py="12px">
      <Text className="uppercase" fontSize="19px">
        Thông tin tài khoản
      </Text>
      <Box py="10px">
        <Text fontWeight="600" fontSize="15px" py="6px">
          {`Họ tên: ${currentUser?.name}`}
        </Text>
        <Text fontWeight="600" fontSize="15px" py="6px">
          {`Email: ${currentUser?.email}`}
        </Text>
        <Text fontWeight="600" fontSize="15px" py="6px">
          {`Số điện thoại: ${
            currentUser?.phonenumber !== undefined ? currentUser.phonenumber : 'Số điện thoại chưa được cập nhật'
          }`}
        </Text>
      </Box>
    </Box>
  );
};
