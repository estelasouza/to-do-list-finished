import styled from "styled-components";
import React, { useState } from 'react';
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import firebase from "firebase";


const ForgotPassoword = () => {
    const [email, setEmail] = useState('')
      const authUser = firebase.auth()
    const sendEmail = (email ) => {
      authUser.sendPasswordResetEmail(email).then(e=>{
        console.log('deu certo',e)
      }).catch(e=> e)
    }
    
    return(
        <WrapperForgotPassword>
        <h2>Recuperar a senha</h2>
        <ParagrafMargin>Email</ParagrafMargin>
        <Input onChange={e=>{
          setEmail(e.target.value)
          }} />
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
export const ParagrafMargin = styled.p `
  margin:20px;
`


export default ForgotPassoword