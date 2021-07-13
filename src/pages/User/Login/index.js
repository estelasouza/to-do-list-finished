import styled from "styled-components";
import React,{ useState } from 'react';
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import {SingIn} from '../../../firebase'

export const Login= () => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const LoginUser = (email,password)=>{
       const res = SingIn(email,password)
        console.log(res)
    };
    return(
        <WrapperLogin>
        <ParagrafLeft>Email</ParagrafLeft>
       <Input value={email} onChange={e=>setEmail(e.target.value)} />
        <ParagrafLeft>Password</ParagrafLeft>
        <Input value={password} onChange={e=>setPassword(e.target.value)}/>
        <a>Esqueceu a senha?</a>
        <Button onClick={()=>LoginUser(email,password)}>Login</Button>
        <span>

        <ParagrafLeft>Não tem conta ?</ParagrafLeft>
        <LinkBold> Crie agora mesmo</LinkBold>
        </span>
        </WrapperLogin>
    )
}
const WrapperLogin = styled.section`
    display: inline-grid;
`
const ParagrafLeft = styled.p`
        display: inline-flex;
`
const LinkBold = styled.a`
font-weight: bold;
`
export default Login