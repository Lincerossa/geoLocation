import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import Button from './Button'

const Form = ({ handleSubmit, fields }) => {
  return (
    <ReduxForm onSubmit={handleSubmit}>
      {
        fields &&
        fields.map(({ name, label, component = "input", type = "text", value, placeholder }) => (
          <FieldGroup>
            <Label htmlFor={name}>{label}</Label>
            <Field name={name} component={component} type={type} placeholder={placeholder} value={value} />
          </FieldGroup>
        ))
      }
      <Button small type="submit">Invia</Button>
    </ReduxForm>
  )
}

const ReduxForm = styled.form`
  margin: 1rem;
`


const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
`

const Label = styled.label`
  text-transform: uppercase;
  font-size: .75rem;
  margin-bottom: .25rem;
  letter-spacing: .1em;
  font-family: sans-serif;
`
export default Form

