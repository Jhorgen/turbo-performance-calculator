import React, { Componenet } from 'react';
import { Field } from 'redux-form';
import Select from './../../components/Select'

export const FormComponent = ({handleSubmit, onSubmit}) => {
  return(
    <div>
    <h1>Vehicle Select</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Field name="make" label="Make" component={Select} options={{
      //
    }}/>
    <Field name="model" label="Model" component={Select} options={{
      //
    }}/>
    <Field name="year" label="Year" component={Select} options={{
      //
    }}/>
    <Field name="trim" label="Trim" component={Select} options={{
      //
    }}/>
    <button type="submit" className="link br2 bg-blue white dim pa3 f6 sans-serif b--blue ba">Submit</button>
    </form>
    </div>
  )
}

export default FormComponent;
