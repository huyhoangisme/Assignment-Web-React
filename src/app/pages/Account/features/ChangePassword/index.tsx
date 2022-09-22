import { Box, Spinner, Text } from '@chakra-ui/react';
import useChangePassword from 'app/components/Auth/useChangePassword';
import Button from 'app/components/Button';
import Form from 'app/components/Form';
import InputField from 'app/components/Form/InputField';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import * as yup from 'yup';
interface ChangePasswordValue {
  currentPassword: string;
  password: string;
  confirmPassword: string;
}
const schema = yup.object().shape({
  currentPassword: yup.string().trim().min(8).required('Mật khẩu tối thiểu 8 kí tự'),
  password: yup.string().trim().min(8).required('Mật khẩu tối thiểu 8 kí tự'),
  confirmPassword: yup.string().trim().min(8).required('Mật khẩu tối thiểu 8 kí tự'),
});
export const ChangePassword = () => {
  const { theme } = useThemeContext();
  const { loading, changePassword } = useChangePassword();
  const handleSubmit = (data: ChangePasswordValue) => {
    changePassword && changePassword(data.currentPassword, data.password, data.confirmPassword);
  };
  if (loading) return <Spinner />;
  return (
    <Box py="12px" className="w-1/2 ">
      <Text fontSize="19px" className="uppercase">
        Đổi mật khẩu
      </Text>
      <Form onSubmit={handleSubmit} validationSchema={schema}>
        <Box mt="10px">
          <InputField name="currentPassword" placeholder="" type="password" label="Mật khẩu cũ" />
        </Box>
        <Box mt="10px">
          <InputField name="password" placeholder="" type="password" label="Mật khẩu mới" />
        </Box>
        <Box mt="10px">
          <InputField name="confirmPassword" placeholder="" type="password" label="Xác nhận lại mật khẩu" />
        </Box>
        <Button variant="button-outline" w="300px" type="submit" bgColor={theme.textColor} mt="30px">
          Đặt lại mật khẩu
        </Button>
      </Form>
    </Box>
  );
};
