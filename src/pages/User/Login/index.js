import styled from "styled-components";
import React,{ useState } from 'react';
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import {SingIn} from '../../../firebase'
import Alert from '@material-ui/lab/Alert';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ForgotPassoword from '../ForgotPassword';
import CreateUser from '../CreateUser';
import { makeStyles } from '@material-ui/core/styles';

export const Login= () => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [forgotPassword,setForgotPassword]= useState(false)
    const [newAccount,setNewAccount]= useState(false)
    const classes = useStyles();

    const LoginUser = async (email,password)=>{
       const res = await SingIn(email,password)
       if(res){
           console.log('aquiiiiii', res)
       }
    //    const message = res.message
    //    setMessage(message)
        
    };

    const handleOpenPass = () => {
        setForgotPassword(true);
      };
    
      const handleClosePass = () => {
        setForgotPassword(false);
      };

      const handleOpenUser = () => {
        setNewAccount(true);
      };
    
      const handleCloseUser = () => {
        setNewAccount(false);
      };

    return(
        <WrapperLogin>
        <ParagrafLeft>Email</ParagrafLeft>
       <Input value={email} onChange={e=>setEmail(e.target.value)} />
        <ParagrafLeft>Password</ParagrafLeft>
        <Input value={password} onChange={e=>setPassword(e.target.value)}/>
        <LinkBoldPassword onClick={
            ()=>handleOpenPass()
        }>Esqueceu a senha?</LinkBoldPassword>
        <Alert severity="error">{message}</Alert>
        <Button onClick={()=>LoginUser(email,password)}>Login</Button>
        <span>

        <ParagrafLeft onClick={()=>{

        }}>Não tem conta ?</ParagrafLeft>
        <LinkBold onClick={()=>{
           handleOpenUser()
        }}> Crie agora mesmo</LinkBold>
        </span>

        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={forgotPassword}
        className={classes.modal}
        onClose={handleClosePass}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }} >
 <Fade in={forgotPassword}>
            <ForgotPassoword></ForgotPassoword>
        </Fade>

        </Modal>


        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={newAccount}
        className={classes.modal}
        onClose={handleCloseUser}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }} >
 <Fade in={newAccount}>
            <CreateUser></CreateUser>
        </Fade>

        </Modal>


        </WrapperLogin>
    )
}
const WrapperLogin = styled.section`
    display: inline-grid;
`
const ParagrafLeft = styled.p`
        display: inline-flex;
        margin-top: 30px;
`
const LinkBold = styled.a`
font-weight: bold;
cursor:pointer;
`

const LinkBoldPassword = styled.a`
cursor:pointer;
font-size:15px;
`

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
     
      padding: theme.spacing(2, 4, 3),
    },
  }));

export default Login