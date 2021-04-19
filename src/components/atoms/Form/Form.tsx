import React from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { StyledForm } from './styles';

export interface FormProps {
  defaultValues?: object;
  form?: UseFormReturn;
  onSubmit: (data: any) => void;
  children: React.ReactElement | React.ReactElement[];
}

export interface ChildProps {
  name: string;
  children: React.ReactElement | React.ReactElement[];
}

const Form = ({
  defaultValues,
  onSubmit,
  form,
  children,
  ...rest
}: FormProps): JSX.Element => {
  const methods = form ? form : useForm({ defaultValues });
  const { handleSubmit, formState } = methods;

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
              errors: formState.errors,
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
    <StyledForm onSubmit={handleSubmit(onSubmit)} {...rest}>
      {recursiveMap(children)}
    </StyledForm>
  );
};

Form.useForm = useForm;

export default Form;
