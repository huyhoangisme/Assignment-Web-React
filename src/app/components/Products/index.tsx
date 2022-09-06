import { Box } from '@chakra-ui/react';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../styles/swiper.ts';
import Button from '../Button';
import Carousel from '../Carousel';
import Title from '../Title';

interface ProductProps {
  children: React.ReactNode;
  title: string;
  pagination?: any;
}

const Products = ({ title, children, pagination }: ProductProps) => {
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
      <Carousel slidesPerView={6} spaceBetween={30} navigation>
        {children}
      </Carousel>
    </Box>
  );
};
export default Products;
