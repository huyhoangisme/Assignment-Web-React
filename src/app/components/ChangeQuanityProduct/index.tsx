import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Button from '../Button';
interface Props {
  quanity: number;
  handleOnIncrease: (quanity: number) => void;
  handleOnDecrease: (quanity: number) => void;
}
const ChangeQuanityProduct: React.FC<Props> = ({ quanity, handleOnIncrease, handleOnDecrease }: Props) => {
  return (
    <Box className="my-4 flex items-center space-x-5">
      <Text className="font-bold">Số lượng:</Text>
      <Box className="flex  items-center ">
        <Box className="flex space-x-4">
          <Button variant="button-quanity" onClick={() => handleOnDecrease(quanity)}>
            &#8722;
          </Button>
          <Button variant="button-quanity" fontSize="14px">
            {quanity}
          </Button>
          <Button variant="button-quanity" onClick={() => handleOnIncrease(quanity)}>
            +
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default ChangeQuanityProduct;
