import React from 'react';
import {
  useForm,
  UseFormReturn,
  UseFormProps,
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

  function recursiveMap(
    children: React.ReactElement<ChildProps> | React.ReactElement<ChildProps>[],
  ) {
    return React.Children.map(
      children,
      (child: React.ReactElement<ChildProps>) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        if (child.props.name) {
          return React.createElement(child.type, {
            ...{
              ...child.props,
              register: methods.register,
              errors: methods.formState.errors,
              key: child.props.name,
            },
          });
        }

        if (child.props.children) {
          child = React.cloneElement(child, {
            children: recursiveMap(child.props.children),
          });
        }

        return React.cloneElement(child, {});
      },
    );
  }

  return (
    <StyledForm onSubmit={methods.handleSubmit(onSubmit)} {...rest}>
      {recursiveMap(children)}
    </StyledForm>
  );
};

Form.useForm = useForm;

export default Form;
