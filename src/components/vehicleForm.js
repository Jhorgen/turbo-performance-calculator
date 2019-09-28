import React from 'react'
import { SubmissionError } from 'redux-form'

// Mock select form. API will be integrated.

function VehicleForm() {
  return (
    <div className='vehicle-form'>
      <select name="carlist" form="vehicle-year" >
        <option value="audi">1990</option>
        <option value="audi">1991</option>
        <option value="audi">1992</option>
        <option value="audi">1993</option>
        <option value="audi">1994</option>
        <option value="audi">1995</option>
        <option value="audi">1996</option>
        <option value="audi">1997</option>
        <option value="audi">1998</option>
        <option value="audi">1999</option>
        <option value="audi">2000</option>
        <option value="audi">2001</option>
        <option value="audi">2002</option>
        <option value="audi">2003</option>
        <option value="audi">2004</option>
        <option value="audi">2005</option>
        <option value="audi">2006</option>
        <option value="audi">2007</option>
        <option value="audi">2008</option>
        <option value="audi">2009</option>
        <option value="audi">2010</option>
        <option value="audi">2011</option>
      </select>
      <select name="model" form="vehicle-model">
      <option value="model">A6</option>
      <option value="model">S4</option>
      <option value="model">S8</option>
      <option value="model">RS6</option>
      </select>
      <select name="trim" form="vehicle-trim">
        <option value="trim">test</option>
        <option value="trim">test</option>
        <option value="trim">test</option>
        <option value="trim">test</option>
      </select>
      <select name="turbocharger" form="turbocharger-size">
        <option value="turbocharger">test</option>
        <option value="turbocharger">test</option>
        <option value="turbocharger">test</option>
        <option value="turbocharger">test</option>
      </select>
    </div>
  )
}

export default VehicleForm;
