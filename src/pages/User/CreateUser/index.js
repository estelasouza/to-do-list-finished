import styled from "styled-components";
import React, { useState } from 'react';
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import {CreateNewUser} from '../../../firebase'

 const CreateUser= () => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const submitUser = (email,password)=>{
        const res = CreateNewUser(email,password) 
        console.log(res)
    };
    return(
        <WrapperCreateUser>
        <p>Email</p>
        <Input value={email} onChange={e=>setEmail(e.target.value)} />
        <p>Password</p>
        <Input value={password} onChange={e=>setPassword(e.target.value)}/>
        <Button onClick={() =>submitUser(email,password)}>Criar conta</Button>
        </WrapperCreateUser>
    )
}
const WrapperCreateUser = styled.section `
    background:white;
`
export default CreateUser;