import styled from "styled-components";
import React, { useState } from 'react';
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import {ForgotPassword} from '../../../firebase'


export const ForgotPassoword = () => {
    const [email, setEmail] = useState('')
    const sendEmail = (email) =>{
      const res = ForgotPassword(email)
      console.log(res)
    }
    return(
        <>
        <p>Email</p>
        <Input onChange={e=>setEmail(e.target.event)} />
        <Button onClick={() =>sendEmail(email)}>Recuperar</Button>
        </>
    )
}