import { BreadcrumbItem as BreadcrumItemChakra, BreadcrumbItemProps, BreadcrumbLink } from '@chakra-ui/react';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import { Link } from 'react-router-dom';
interface Props extends BreadcrumbItemProps {
  path: string;
  label: string;
}
const BreadcrumbItem: React.FC<Props> = ({ path, label, ...props }) => {
  const { theme } = useThemeContext();
  return (
    <BreadcrumItemChakra {...props}>
      <BreadcrumbLink _hover={{ color: theme.bgColor }} fontSize={14}>
        <Link to={path}>{label}</Link>
      </BreadcrumbLink>
    </BreadcrumItemChakra>
  );
};
export default BreadcrumbItem;
