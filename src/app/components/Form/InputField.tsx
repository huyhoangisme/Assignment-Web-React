import { InputGroup, InputLeftElement, InputProps as ChakraInputProps, InputRightElement } from '@chakra-ui/react';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from '../Input';

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

const InputField: React.FC<InputProps> = ({ name, label = '', leftIcon, rightIcon, ...props }: InputProps) => {
  const { register } = useFormContext();

  const registerResult = register(name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    registerResult.onChange(e);
    props.onChange && props.onChange(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    props.onBlur && props.onBlur(e);
  };

  return (
    <div className="w-full">
      {label && <div className="font-bold text-[16px] mb-[5px]">{label}</div>}

      <InputGroup>
        {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={`Please enter your ` + name}
          register={registerResult}
          width={'full'}
          type={'text'}
          height={45}
          borderRadius={0}
          className="mb-[15px]"
          {...props}
        />
        {rightIcon && <InputRightElement zIndex={10}>{rightIcon}</InputRightElement>}
      </InputGroup>
      <ErrorMessage
        name={name}
        render={({ message }) => {
          return <p className="text-error text-left text-[13px] text-red-500">{message}</p>;
        }}
      />
    </div>
  );
};

export default InputField;
