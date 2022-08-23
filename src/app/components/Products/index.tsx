import { Box } from '@chakra-ui/react';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Swagger } from 'styles/swiper';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper } from 'swiper/react';
import '../../../styles/swiper.ts';
import Button from '../Button';
import Title from '../Title';

interface ProductProps {
  children: React.ReactNode;
  title: string;
}

const Product = ({ title, children }: ProductProps) => {
  const { theme } = useThemeContext();
  return (
    <Box px="100px" my="20px">
      <Box className="flex justify-between items-center">
        <Box>
          <Title title={title} _hover={{ color: theme.bgColor }} />
          <Box className="border-b-[3px] border-[#f45c43] rounded-full" width="100px"></Box>
        </Box>
        <Button rightIcon={<BsArrowRight fontSize="20px" />} fontWeight="400" bgColor={theme.primary} borderRadius="0">
          Xem thêm
        </Button>
      </Box>
      <Swagger className="mt-10">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          slidesPerGroup={1}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {children}
        </Swiper>
      </Swagger>
    </Box>
  );
};
export default Product;
