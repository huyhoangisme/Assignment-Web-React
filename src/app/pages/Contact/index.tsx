import { Box, Text } from '@chakra-ui/react';
import Button from 'app/components/Button';
import Footer from 'app/components/Footer';
import Form from 'app/components/Form';
import InputField from 'app/components/Form/InputField';
import Textarea from 'app/components/Form/Textarea';
import React from 'react';
import * as yup from 'yup';
import { MdLocationOn, MdEmail, MdLocalPhone } from 'react-icons/md';
const schema = yup.object().shape({});
export const Contact = () => {
  const handleSubmit = () => {};

  return (
    <>
      <Box px="100px" className="flex space-x-10 py-10">
        <Box className="flex-1">
          <Text fontSize="16px" className="uppercase font-bold">
            Cửa hàng đồ điện tử THSTORE
          </Text>
          <Box className="py-4 space-y-1">
            <Text className="flex">
              <MdLocationOn fontSize={18} style={{ marginRight: '10px' }} /> xã Sơn Trường, huyện Hương Sơn, tỉnh Hà
              Tĩnh
            </Text>
            <Text className="flex">
              <MdEmail fontSize={18} style={{ marginRight: '10px' }} /> huyhoangtran211201@gmail.com
            </Text>
            <Text className="flex">
              <MdLocalPhone fontSize={18} style={{ marginRight: '10px' }} /> 0705923620
            </Text>
          </Box>
          <Text fontSize="16px" className="uppercase font-bold py-4">
            Liên hệ với chúng tôi
          </Text>
          <Form validationSchema={schema} onSubmit={handleSubmit}>
            <InputField name="fullName" placeholder="Họ và tên" mb="10px" />
            <InputField name="email" placeholder="Email" mb="10px" />
            <InputField name="phonenumber" placeholder="Điện thoại" mb="10px" />
            <Textarea name="description" placeholder="Nội dung" mb="20px" />
            <Button type="submit" variant="button-outline" bg="#333" width="1/3" fontWeight="400" fontSize="14px">
              Gửi thông tin
            </Button>
          </Form>
        </Box>
        <Box className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60553.98773474423!2d105.40579247197971!3d18.455362786309387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139be46ffcd4fef%3A0xe35b1a749f39c31d!2zU8ahbiBUcsaw4budbmcsIEjGsMahbmcgU8ahbiwgSMOgIFTEqW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1660841879809!5m2!1svi!2s"
            width="100%"
            height="450"
            title="map"
          ></iframe>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
