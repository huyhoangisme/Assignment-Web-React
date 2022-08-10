import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';

export interface FormProps<T> {
  children: React.ReactNode;
  validationSchema: AnyObjectSchema;
  defaultValues?: T;
  mode?: 'onBlur' | 'onSubmit' | 'onChange' | undefined;
  onSubmit: (data: T) => void;
}
function Form<T>({ mode = 'onChange', children, validationSchema, onSubmit, defaultValues, ...props }: FormProps<T>) {
  const methods = useForm<T>({
    mode,
    resolver: yupResolver(validationSchema),
  });
  return (
    <FormProvider {...methods}>
      <form {...props} onSubmit={methods.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        {children}
      </form>
    </FormProvider>
  );
}
export default Form;
