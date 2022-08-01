import { InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from './Input';
import { ErrorMessage } from '@hookform/error-message';
interface InputFieldProps {
  name: string;
  label: string;
  leftIcon: JSX.Element;
  rightIcon: JSX.Element;
}
const InputField: React.FC<InputFieldProps> = ({ name, label, leftIcon, rightIcon }) => {
  const { register } = useFormContext();
  const registerResult = register(name);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    registerResult.onChange(e);
  };
  return (
    <div className="w-full">
      {label ? <Text fontSize="16px">{label}</Text> : undefined}
      <InputGroup>
        {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
        <Input register={registerResult} placehoder={`Please enter your ${name}`} onChange={handleChange} />
        {rightIcon && <InputRightElement>{rightIcon}</InputRightElement>}
      </InputGroup>
      <ErrorMessage name={name} render={({ message }) => <p className="text-error text-danger">{message}</p>} />
    </div>
  );
};

export default InputField;
