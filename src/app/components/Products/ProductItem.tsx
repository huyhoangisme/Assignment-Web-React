import { Badge, Box, Fade, Text, useDisclosure } from '@chakra-ui/react';
import { Product } from 'app/api/products';
import { Thumb1 } from 'app/assets';
import { useNumberWithDot } from 'app/hooks/useNumberWithDot';
import { productsActions } from 'app/redux/products/productsSlice';
import { useAppDispatch } from 'app/redux/root';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import { BsEye, BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Button from '../Button';
import ProductImage from './ProductImage';

const ProductItem = (product: Product) => {
  const { theme } = useThemeContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const handleOpenDetailProduct = (id: string) => {
    dispatch(productsActions.getProductById(id));
  };
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
        <ProductImage src={Thumb1} />
        {/* {product?.discount && (
          <Box className="absolute flex justify-center top-0 left-0">
            <Badge
              bgColor="#4DB23D"
              color="#fff"
              w="45px"
              borderRadius="4px"
              className="flex text-center !font-normal py-[1px]"
            >{`${product.discount} %`}</Badge>
          </Box>
        )} */}
        <Fade in={isOpen}>
          <Box className="absolute bottom-0 left-0 right-0">
            <Button variant="button-product-list">Thêm vào giỏ hàng</Button>
          </Box>
          <Box className="absolute right-0 top-0 space-y-2">
            <Box
              width="30px"
              height="30px"
              bgColor="#EFEFEF"
              className="rounded-full flex items-center justify-center cursor-pointer"
            >
              <Link to={`product/${product?.name}`} onClick={() => handleOpenDetailProduct(product._id)}>
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
          {product?.name}
        </Text>
        <Text color={theme.bgColor} fontSize="14px">
          {`${useNumberWithDot(product?.price)} ₫`}
        </Text>
      </Box>
    </Box>
  );
};
export default ProductItem;
