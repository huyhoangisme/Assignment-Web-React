import { InputGroup, InputLeftElement, InputProps, InputRightElement } from '@chakra-ui/react';
import React from 'react';
import Input from '../Input';
interface Props {
  placeholder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputProps?: InputProps;
}
const Search: React.FC<Props> = ({ placeholder, leftIcon, rightIcon, inputProps, ...props }) => {
  return (
    <InputGroup>
      {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
      <Input placeholder={placeholder} {...props} {...inputProps} />
      {rightIcon && <InputRightElement>{rightIcon}</InputRightElement>}
    </InputGroup>
  );
};
export default Search;
