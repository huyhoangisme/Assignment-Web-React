import { Box, Center, Text } from '@chakra-ui/react';
import Button from 'app/components/Button';
import Form from 'app/components/Form';
import InputField from 'app/components/Form/InputField';
import Title from 'app/components/Title';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().trim().required('Vui lòng điền vào mục này'),
  password: yup.string().trim().required('Vui lòng điền vào mục này'),
  firstName: yup.string().trim().required('Vui lòng điền vào mục này'),
  lastName: yup.string().trim().required('Vui lòng điền vào mục này'),
  phonenumber: yup.string().trim().required('Vui lòng điền vào mục này'),
  confirmPassword: yup.string().trim().required('Vui lòng điền vào mục này'),
});

export const Register = () => {
  const { theme } = useThemeContext();
  const handleSubmit = () => {};
  return (
    <Box>
      <Center>
        <Box w={400} p={30} marginY="40px" border={'1px solid #EBEBEB'} className="shadow-lg">
          <Box className="text-center">
            <Title title="Đăng ký" fontSize="26px" />
            <Text fontSize={14} mt="10px" mb="20px">
              Đã có tài khoản, đăng nhập{' '}
              <span className="text-[#ff5c00]">
                <Link to="/login">tại đây</Link>
              </span>
            </Text>
          </Box>
          <Form validationSchema={schema} onSubmit={handleSubmit}>
            <Box className="space-y-4 w-full">
              <InputField name="firstName" placeholder="Họ" bgColor="#EBEBEB" />
              <InputField name="lastName" placeholder="Tên" type="password" bgColor="#EBEBEB" />
              <InputField name="email" placeholder="Email" bgColor="#EBEBEB" />
              <InputField name="phonenumber" placeholder="Số điện thoại" bgColor="#EBEBEB" />
              <InputField name="password" placeholder="Mật khẩu" type="password" bgColor="#EBEBEB" />
              <InputField name="confirmPassword" placeholder="Nhập lại mật khẩu" type="password" bgColor="#EBEBEB" />
              <Button type="submit" variant="button-outline" bg="#333">
                Đăng ký
              </Button>
            </Box>
          </Form>
          <Box className="text-[14px] text-center">
            <Text mt="15px">Hoặc đăng nhập bằng</Text>
            <Box className="flex space-x-4  m-[20px]">
              <Button
                variant="button-outline"
                bg={theme.primary}
                fontSize={12}
                leftIcon={<FaFacebookSquare fontSize="20px" />}
              >
                Facebook
              </Button>
              <Button
                variant="button-outline"
                bg={theme.bgColor}
                fontSize={12}
                leftIcon={<AiOutlineGooglePlus fontSize="20px" />}
              >
                Google
              </Button>
            </Box>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
