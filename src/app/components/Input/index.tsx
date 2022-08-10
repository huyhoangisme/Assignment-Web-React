import React from 'react';
import { Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  register?: UseFormRegisterReturn;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ register, ...restProps }: InputProps) => {
  return (
    <ChakraInput
      // Default style
      variant="outline"
      fontSize="14px"
      lineHeight="none"
      bg="white"
      borderRadius="10px"
      min-w="280px"
      {...register}
      {...restProps}
    />
  );
};

export default Input;
