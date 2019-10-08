import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import FormComponent from './formComponent';

export const FormContainer = ({handleSubmit}) => {

  const submitForm = (formValues) => {
    console.log('submitting Form:', formValues);
  }

  return (
   <FormComponent onSubmit={submitForm} handleSubmit={handleSubmit}/>);
}

const formConfiguration = {
  form: 'my-first-redux-form'
}

export default reduxForm(formConfiguration)(FormContainer);
