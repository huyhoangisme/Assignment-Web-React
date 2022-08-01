import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';

export interface FormProps<T> {
  onSubmit: (values: T) => void;
  validationSchema: AnyObjectSchema;
  children: React.ReactNode;
  mode?: 'onChange' | 'onBlur' | 'onSubmit' | undefined;
  defaultValues?: T;
}

function Form<T>({ mode = 'onChange', onSubmit, validationSchema, defaultValues, children, ...props }: FormProps<T>) {
  const formHandler = useForm<T>({
    mode,
    resolver: yupResolver(validationSchema),
  });
  return (
    <FormProvider {...formHandler}>
      <form {...props} onSubmit={formHandler.handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        {children}
      </form>
    </FormProvider>
  );
}
export default Form;
