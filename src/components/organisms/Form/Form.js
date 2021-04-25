import React from 'react';
import PropTypes from 'prop-types';
import { StyledForm } from './Form.style';
import { useForm } from 'react-hook-form';

const Form = ({ defaultValues, children, onSubmit, ...rest }) => {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;
  
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} {...rest}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
            })
          : child;
      })}
    </StyledForm>
  );
};

Form.propTypes = {};

export default Form;
