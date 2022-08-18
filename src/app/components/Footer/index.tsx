import { Box, Text } from '@chakra-ui/react';
import { iconService } from 'app/assets';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import * as yup from 'yup';
import Button from '../Button';
import Form from '../Form';

import InputField from '../Form/InputField';
import LogoApp from '../Header/Logo';
import SlidebarItem from '../Slidebar/SlidebarItem';
import Title from '../Title';
interface BannerItemProps {
  title: string;
  description: string;
  leftIcon: string;
}
export const BannerItem: React.FC<BannerItemProps> = ({ title, description, leftIcon }: BannerItemProps) => {
  return (
    <Box className="flex py-[30px]  space-x-4">
      <img src={leftIcon} alt="" />
      <Box>
        <Title title={title} fontSize={16} color="white" />
        <Text fontSize={14} color="white">
          {description}
        </Text>
      </Box>
    </Box>
  );
};
export const Banner = () => {
  const { theme } = useThemeContext();
  return (
    <Box bgColor={theme.bgColor} className="px-[100px] flex justify-between space-x-5 ">
      <BannerItem leftIcon={iconService} title="Giao hàng toàn quốc" description="Miễn phí ship HN,HCM" />
      <BannerItem leftIcon={iconService} title="Giao hàng toàn quốc" description="Miễn phí ship HN,HCM" />
      <BannerItem leftIcon={iconService} title="Giao hàng toàn quốc" description="Miễn phí ship HN,HCM" />
      <BannerItem leftIcon={iconService} title="Giao hàng toàn quốc" description="Miễn phí ship HN,HCM" />
    </Box>
  );
};
const schema = yup.object().shape({});
const Footer = () => {
  const { theme } = useThemeContext();
  const handleSubmit = () => {};
  return (
    <Box>
      <Banner />
      <Box className="px-[100px] pt-[60px] pb-[20px] flex justify-between" bgColor={theme.textColor}>
        <Box>
          <LogoApp />
          <Text color={theme.bgColor} my="10px">
            Cửa hàng đồ điện tử itechstore
          </Text>
          <Text color={theme.background} my="10px">
            Đăng kí thông tin khuyến mãi
          </Text>
          <Form validationSchema={schema} onSubmit={handleSubmit}>
            <Box className="flex justify-start space-x-4">
              <InputField name="info" placeholder="Nhập địa chỉ email" w="320px" borderRadius="10px" />
              <Button bgColor={theme.bgColor} height="45px">
                Gửi
              </Button>
            </Box>
          </Form>
        </Box>
        <Box>
          <Title title="Hỗ trợ khách hàng" color="#fff" />
          <SlidebarItem path="" title="Mua hàng và thanh toán online" />
          <SlidebarItem path="" title="Mua hàng và trả góp online" />
          <SlidebarItem path="" title="Trung tâm bảo hàng chính hãng" />
          <SlidebarItem path="" title="Dịch vụ khách hàng" />
          <SlidebarItem path="" title="Tra thông tin bảo hành" />
        </Box>
        <Box>
          <Title title="Thông tin khác" color="#fff" />
          <SlidebarItem path="" title="Quy chế hoạt động" />
          <SlidebarItem path="" title="Chính sách bảo hành" />
          <SlidebarItem path="" title="Liên hệ hợp tác kinh doanh" />
          <SlidebarItem path="" title="Ưu đãi từ đối tác" />
          <SlidebarItem path="" title="Trade-in thu cũ lên đời mới" />
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
