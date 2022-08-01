import { Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  title: string;
}
const Title: React.FC<Props> = ({ title, ...props }) => {
  return (
    <Text {...props} fontSize="20px" _hover={{}} className="uppercase">
      {title}
    </Text>
  );
};
export default Title;
