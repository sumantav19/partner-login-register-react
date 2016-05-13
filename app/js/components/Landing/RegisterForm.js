import React from 'react'
import { Form , FormGroup , FormControl , Col , Button , Checkbox } from 'react-bootstrap'

const RegisterForm = (
  props) => {
  let email ,
  phoneNumber , 
  password ;  
  return(
    <form class="form-horizontal" onSubmit={(e) => {
      e.preventDefault();
      props.onRegister(email.value,phoneNumber.value,password.value);
    }}>
      <FormGroup controlId="formHorizontalEmail">      
        <Col sm={12}>
          <input class="form-control" value={email} required type="email" ref={ (node) => {
            email = node;
          }}  placeholder="Email" />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalPhoneNumber">      
        <Col sm={12}>
          <input required type="number" value={phoneNumber} class="form-control" ref={ (node) => {
            phoneNumber = node;
          }} placeholder="Phone Number" />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalPassword">      
        <Col sm={12}>
          <input required type="password" value={password} class="form-control" ref={ (node) => {
            password = node;
          }} placeholder="Password" />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col  sm={12}>
          <input class="btn btn-primary form-control" type="submit" value="Register"/>                      
        </Col>
      </FormGroup>
    </form>
  )
};


export default  RegisterForm;
