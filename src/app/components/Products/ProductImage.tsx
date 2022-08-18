import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const ProductImage = ({ src, ...props }) => {
  return (
    <Box boxSize="w-full" height="190px" {...props}>
      <Image src={src} alt="" />
    </Box>
  );
};
export default ProductImage;
