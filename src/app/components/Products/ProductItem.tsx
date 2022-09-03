import { Badge, Box, Fade, Text, useDisclosure } from '@chakra-ui/react';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import { BsEye, BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Button from '../Button';
import ProductImage from './ProductImage';
export interface DetailProductItem {
  name: string;
  src: string;
  labelButton: string;
  price: string;
  salePercent?: string;
}
interface ProductItemProps {
  productItem: DetailProductItem;
}
const ProductItem: React.FC<ProductItemProps> = ({ productItem }: ProductItemProps) => {
  const { theme } = useThemeContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { name, src, labelButton, price, salePercent } = productItem;
  return (
    <Box
      p="10px"
      bgColor="#fff"
      width="full"
      borderRadius="10px"
      onMouseOver={() => onOpen()}
      onMouseOut={() => onClose()}
    >
      <Box className="relative">
        <ProductImage src={src} />
        {salePercent && (
          <Box className="absolute flex justify-center top-0 left-0">
            <Badge
              bgColor="#4DB23D"
              color="#fff"
              w="45px"
              borderRadius="4px"
              className="flex text-center !font-normal py-[1px]"
            >{`${salePercent} %`}</Badge>
          </Box>
        )}
        <Fade in={isOpen}>
          <Box className="absolute bottom-0 left-0 right-0">
            <Button variant="button-product-list">{labelButton}</Button>
          </Box>
          <Box className="absolute right-0 top-0 space-y-2">
            <Box
              width="30px"
              height="30px"
              bgColor="#EFEFEF"
              className="rounded-full flex items-center justify-center cursor-pointer"
            >
              <Link to={`product/${name}`}>
                <BsEye fontSize="18px" color="#6c757d" />
              </Link>
            </Box>
            <Box
              width="30px"
              height="30px"
              bgColor="#EFEFEF"
              className="rounded-full flex items-center justify-center cursor-pointer"
            >
              <BsHeart fontSize="18px" color="#6c757d" />
            </Box>
          </Box>
        </Fade>
      </Box>
      <Box className="text-start">
        <Text fontSize="14px" className="cursor-pointer py-3" _hover={{ color: theme.bgColor }}>
          {name}
        </Text>
        <Text color={theme.bgColor} fontSize="14px">
          {price}
        </Text>
      </Box>
    </Box>
  );
};
export default ProductItem;
