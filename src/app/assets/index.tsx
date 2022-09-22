import React from 'react';
import Logo from './images/logo.webp';
import iconService from './images/icon_service_1.webp';
import Product1 from './images/product1.webp';
import Thumb1 from './images/thumb1.webp';
import { IoMdArrowDropdown as DropdownIcon } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { IconProps } from '@chakra-ui/react';
import deleteIcon from './images/delete.svg';
import editIcon from './images/edit.svg';
export const ArrowBack: React.FC<IconProps> = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"></path>
      </svg>
    </>
  );
};
export const ArrowForward: React.FC<IconProps> = ({ color }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path d="M7.15 21.1q-.375-.375-.375-.888q0-.512.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375q.512 0 .887.375l8.4 8.425q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325L8.9 21.125q-.35.35-.862.35q-.513 0-.888-.375Z"></path>
      </svg>
    </>
  );
};

export {
  Logo,
  iconService,
  Product1,
  Thumb1,
  deleteIcon,
  editIcon,
  DropdownIcon,
  AiOutlineSearch,
  AiFillFacebook,
  AiOutlineGooglePlus,
};
