import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';
interface TitleProps extends TextProps {
  title: string;
}
const Title: React.FC<TitleProps> = ({ title, ...props }: TitleProps) => {
  return (
    <Text {...props} className="uppercase text-xl text-bold">
      {title}
    </Text>
  );
};
export default Title;
