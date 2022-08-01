import { Input as ChakraInput, InputProps as ChakraInPutProps } from '@chakra-ui/react';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends ChakraInPutProps {
  register: UseFormRegisterReturn;
  placehoder: string;
}
const Input: React.FC<InputProps> = ({ register, ...restProps }) => {
  return (
    <ChakraInput
      variant="outline"
      borderRadius="10px"
      fontSize="13px"
      lineHeight="none"
      bg="white"
      {...restProps}
      {...register}
    />
  );
};
export default Input;
// input chi can truyen register va placehoder
