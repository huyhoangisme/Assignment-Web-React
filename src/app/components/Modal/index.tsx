import {
  Modal as ModalCharka,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useThemeContext } from 'app/themes/ThemeProvider';
import React from 'react';
import { useNavigate } from 'react-router-dom';
interface ModalProps {
  title?: string;
  children: React.ReactNode;
  handleOnClose?: () => void;
}
const Modal: React.FC<ModalProps> = ({ title, children, handleOnClose }) => {
  const { theme } = useThemeContext();
  const { onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate(-1);
  };
  return (
    <ModalCharka isOpen={true} onClose={handleOnClose || handleClose} size="5xl">
      <ModalOverlay />
      <ModalContent>
        {title && (
          <ModalHeader bgColor={theme.textColor} color={theme.background} fontSize="16px" fontWeight="400">
            {title}
          </ModalHeader>
        )}
        <ModalCloseButton color={theme.background} />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalCharka>
  );
};
export default Modal;
