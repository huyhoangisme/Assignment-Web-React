import { Box } from '@chakra-ui/react';
import Modal from 'app/components/Modal';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DetailCart from '../../components/DetailCart';

export const ModalCart = () => {
  const navigate = useNavigate();
  const handleCloseModal = () => {
    navigate('/');
  };
  return (
    <Modal handleOnClose={handleCloseModal} title="Bạn đã thêm abc vào giỏ hàng">
      <Box my="10px">
        <Link to="/cart">Giỏ hàng của bạn hiện có 10 sản phẩm</Link>
        <DetailCart />
      </Box>
    </Modal>
  );
};
