import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Form from '../Form';
interface ModalProps {
  title: string;
  schema: yup.AnyObjectSchema;
  handleSubmit: () => void;
  children: React.ReactNode;
}

const ModalForm: React.FC<ModalProps> = ({ title, schema, handleSubmit, children, ...props }: ModalProps) => {
  const { onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <Modal
      isOpen={true}
      onClose={() => {
        onClose();
        navigate(-1);
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Form validationSchema={schema} onSubmit={handleSubmit}>
            {children}
          </Form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default ModalForm;
