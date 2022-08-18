import { Textarea as ChakraTextarea, TextareaProps } from '@chakra-ui/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props extends TextareaProps {
  name: string;
  placeholder?: string;
}

const Textarea: React.FC<Props> = ({ name, placeholder, ...props }) => {
  const { register } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange && props.onChange(e);
  };

  return (
    <ChakraTextarea
      {...register(name)}
      onChange={handleChange}
      placeholder={placeholder ? placeholder : `Please enter your ` + name}
      {...props}
      height="100px"
      fontSize="14px"
      bgColor="#fff"
    />
  );
};

export default Textarea;
