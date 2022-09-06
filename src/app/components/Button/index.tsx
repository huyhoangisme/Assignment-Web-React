import { Button as ButtonChakra, ButtonProps } from '@chakra-ui/react';
import React from 'react';
interface ButtonChakraProps extends ButtonProps {
  children?: React.ReactNode;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
}
const Button: React.FC<ButtonChakraProps> = ({
  children,
  leftIcon,
  rightIcon,

  ...props
}: ButtonChakraProps) => {
  return (
    <ButtonChakra leftIcon={leftIcon} rightIcon={rightIcon} {...props}>
      {children}
    </ButtonChakra>
  );
};
export default Button;
