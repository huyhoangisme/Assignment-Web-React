import {
  Modal as ModalCharka,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
interface ModalProps {
  title?: string;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ title, children }) => {
  const { onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate(-1);
  };
  return (
    <ModalCharka isOpen={true} onClose={handleClose} size="5xl">
      <ModalOverlay />
      <ModalContent>
        {title && <ModalHeader>{title}</ModalHeader>}
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalCharka>
  );
};
export default Modal;
