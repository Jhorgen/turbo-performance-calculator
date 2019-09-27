import React from 'react'
import { SubmissionError } from 'redux-form'

function VehicleForm() {
  return (
    <div className='vehicle-form'>
      <select name="carlist" form="carform">
        <option value="volvo">test</option>
        <option value="saab">test</option>
        <option value="opel">test</option>
        <option value="audi">test</option>
      </select>
      <select name="carlist" form="carform">
        <option value="volvo">test</option>
        <option value="saab">test</option>
        <option value="opel">test</option>
        <option value="audi">test</option>
      </select>
      <select name="carlist" form="carform">
        <option value="volvo">test</option>
        <option value="saab">test</option>
        <option value="opel">test</option>
        <option value="audi">test</option>
      </select>
      <select name="carlist" form="carform">
        <option value="volvo">test</option>
        <option value="saab">test</option>
        <option value="opel">test</option>
        <option value="audi">test</option>
      </select>
    </div>
  )
}

export default VehicleForm;
