import React, { useState } from 'react';
import { Breadcrumb as BreadcrumbChakra } from '@chakra-ui/react';
import BreadcrumbItem from './BreadcrumbItem';
import { useThemeContext } from 'app/themes/ThemeProvider';
import { useLocation } from 'react-router-dom';
interface Crumb {
  label: string;
  path: string;
}
const Breadcrumb = () => {
  const { theme } = useThemeContext();
  const [crumb, setCrumb] = useState<Crumb[]>([]);
  const location = useLocation();
  return (
    <BreadcrumbChakra>
      <BreadcrumbItem path="/" label="Trang chủ" />
    </BreadcrumbChakra>
  );
};
export default Breadcrumb;
