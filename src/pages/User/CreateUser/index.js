import styled from "styled-components";
import React, { useState } from 'react';
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { ParagrafMargin } from '../ForgotPassword';
import firebase from "firebase";

 const CreateUser= () => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const submitUser = (email,password)=>{
        const authUser = firebase.auth()
  authUser.createUserWithEmailAndPassword(email,password).then((e)=>{
    console.log(e)
   
  }).catch(e=>console.log(e))
    };
    return(
        <WrapperCreateUser>
        <h2>Criar novo usuario</h2>
        <ParagrafMargin>Email</ParagrafMargin>
        <Input value={email} onChange={e=>setEmail(e.target.value)} />
        <ParagrafMargin>Password</ParagrafMargin>
        <Input value={password} onChange={e=>setPassword(e.target.value)}/>
        <Button onClick={() =>submitUser(email,password)}>Criar conta</Button>
        </WrapperCreateUser>
    )
}
const WrapperCreateUser = styled.section `
background:white;
  width:320px;
  
  display:flex;
  border-radius:14px;
  flex-direction: column;
    justify-content: flex-end;
    align-content: center;
    flex-wrap: nowrap;
    align-items: center;`
export default CreateUser;