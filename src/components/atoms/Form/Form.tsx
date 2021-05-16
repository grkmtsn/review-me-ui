import React, { cloneElement } from 'react';

import {
  useForm,
  UseFormReturn,
  Control,
  UseFormClearErrors,
  UseFormGetValues,
  UseFormReset,
  UseFormSetError,
  UseFormSetFocus,
  UseFormSetValue,
  UseFormTrigger,
  UseFormUnregister,
  UseFormWatch,
} from 'react-hook-form';
import { StyledForm } from './styles';
import { map } from '../../../utils/eachChildren';

export interface FormProps<TFormValues> {
  defaultValues?: object;
  form?: UseFormReturn<TFormValues>;
  onSubmit: (data: any) => void;
  children: React.ReactElement | React.ReactElement[];
}

export interface CustomFormReturnProps<TFormValues> {
  register: any;
  formState: any;
  handleSubmit: any;
  watch?: UseFormWatch<TFormValues> | UseFormWatch<object>;
  getValues?: UseFormGetValues<TFormValues> | UseFormGetValues<object>;
  setError?: UseFormSetError<TFormValues> | UseFormSetError<object>;
  clearErrors?: UseFormClearErrors<TFormValues> | UseFormClearErrors<object>;
  setValue?: UseFormSetValue<TFormValues> | UseFormSetValue<object>;
  trigger?: UseFormTrigger<TFormValues> | UseFormTrigger<object>;
  reset?: UseFormReset<TFormValues> | UseFormReset<object>;
  unregister?: UseFormUnregister<TFormValues> | UseFormUnregister<object>;
  control?: Control<TFormValues> | Control<object>;
  setFocus?: UseFormSetFocus<TFormValues> | UseFormSetFocus<object>;
}

export interface ChildProps {
  name: string;
  children: React.ReactElement | React.ReactElement[];
}

const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
  defaultValues,
  onSubmit,
  form,
  children,
  ...rest
}: FormProps<TFormValues>): JSX.Element => {
  const methods: CustomFormReturnProps<TFormValues> = form
    ? form
    : useForm({ defaultValues });

  const fn = (el) => {
    let cloneEl = el;
    if (!!el?.props?.name) {
      cloneEl = cloneElement(el, {
        ...el.props,
        register: methods.register,
        errors: methods.formState.errors,
        key: el.props.name,
        children: el.children,
      });
    }
    return cloneEl;
  };

  return (
    <StyledForm onSubmit={methods.handleSubmit(onSubmit)} {...rest}>
      {map(children, fn)}
    </StyledForm>
  );
};

Form.useForm = useForm;

export default Form;
