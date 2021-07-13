import styled from "styled-components";
import React, { useState } from 'react';
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import {ForgotPassword} from '../../../firebase'


const ForgotPassoword = () => {
    const [email, setEmail] = useState('')
    const sendEmail = (email) =>{
      const res = ForgotPassword(email)
      console.log(res)
    }
    return(
        <WrapperForgotPassword>
        <h2>Recuperar a senha</h2>
        <ParagrafMargin>Email</ParagrafMargin>
        <Input onChange={e=>setEmail(e.target.event)} />
        <Button onClick={() =>sendEmail(email)}>Recuperar</Button>
        </WrapperForgotPassword>
    )
}
const WrapperForgotPassword = styled.section`
  background:white;
  width:320px;
  
  display:flex;
  border-radius:14px;
  flex-direction: column;
    justify-content: flex-end;
    align-content: center;
    flex-wrap: nowrap;
    align-items: center;
`
const ParagrafMargin = styled.p `
  margin:20px;
`


export default ForgotPassoword