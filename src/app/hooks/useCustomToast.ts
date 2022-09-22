import { ToastPosition, useToast } from '@chakra-ui/react';

type ToastParams = {
  durationMs?: number;
  position?: ToastPosition;
};

export function useCustomToast(params?: ToastParams) {
  const toast = useToast();

  function toastSuccess(message: string) {
    toast({
      title: message,
      status: 'success',
      duration: params?.durationMs || 3000,
      isClosable: true,
      position: params?.position || 'top',
    });
  }

  function toastError(message: string) {
    toast({
      title: message,
      status: 'error',
      duration: params?.durationMs || 3000,
      isClosable: true,
      position: params?.position || 'top',
    });
  }

  return { toastSuccess, toastError };
}
