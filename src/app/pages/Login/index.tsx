import { Box, Center, Text } from '@chakra-ui/react';
import Button from 'app/components/Button';
import Form from 'app/components/Form/Index';
import InputField from 'app/components/Form/InputField';
import LogoApp from 'app/components/Header/Logo';
import Title from 'app/components/Title';

import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
const schema = yup.object().shape({
  email: yup.string().trim().required('Vui lòng điền vào mục này'),
  password: yup.string().trim().required('Vui lòng điền vào mục này'),
});

export const Login = () => {
  const { theme } = useThemeContext();
  const handleSubmit = () => {};
  return (
    <Box>
      <Box bgColor={theme.bgColor} py={10} className="flex items-center px-[70px] space-x-6">
        <LogoApp />
        <Text fontSize={25}>Đăng nhập</Text>
      </Box>
      <Center>
        <Box w={400} h={450} p={30} marginTop="60px" border={'1px solid #EBEBEB'} className="shadow-lg">
          <div className="text-center">
            <Title title="Đăng nhập" fontSize="26px" />
            <Text fontSize={14} mt="10px" mb="20px">
              Nếu bạn chưa có tài khoản,{' '}
              <span className="text-[#ff5c00]">
                <Link to="/register">đăng kí tại đây</Link>
              </span>
            </Text>
          </div>
          <Form validationSchema={schema} onSubmit={handleSubmit}>
            <div className="space-y-4 w-full">
              <InputField name="email" placeholder="Email" bgColor="#EBEBEB" />
              <InputField name="password" placeholder="Mật khẩu" type="password" bgColor="#EBEBEB" />
              <Button type="submit" variant="black-outline">
                Đăng nhập
              </Button>
            </div>
          </Form>
          <div className="text-[14px] text-center">
            <Text my={15} _hover={{ color: '#ff5c00' }}>
              Quên mật khẩu
            </Text>
            <Text>Hoặc đăng nhập bằng</Text>
          </div>
        </Box>
      </Center>
    </Box>
  );
};
