import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Alert from "@material-ui/lab/Alert";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ForgotPassoword from "../ForgotPassword";
import CreateUser from "../CreateUser";
import firebase from "firebase";

import {WraperHelper, WrapperLogin, ParagrafLeft, DivHidden, useStyles, LinkBoldPassword, LinkBold} from './styles';

export const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [newAccount, setNewAccount] = useState(false);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState("");

  const classes = useStyles();
  const history = useHistory();

  const LoginUser = async (email, password) => {
    const authUser = firebase.auth();
    await authUser
      .signInWithEmailAndPassword(email, password)
      .then((e) => {
        localStorage.setItem("uid", e.user.uid);
        handleLogin(e.user.uid);
        history.push("/home");

        return e;
      })
      .catch((e) => {
        // setMessages(e.message)
        setMessage(e.message);
        setShow("inline");
        return e.message;
      });
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

  return (
    <WraperHelper>
      <WrapperLogin>
        <ParagrafLeft>Email</ParagrafLeft>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ParagrafLeft>Password</ParagrafLeft>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LinkBoldPassword onClick={() => handleOpenPass()}>
          Esqueceu a senha?
        </LinkBoldPassword>
        <DivHidden divDisplay={show}>
          <Alert severity="error">{message}</Alert>
        </DivHidden>
        <Button onClick={() => LoginUser(email, password)}>Login</Button>
        <span>
          <ParagrafLeft onClick={() => {}}>Não tem conta ?</ParagrafLeft>
          <LinkBold onClick={handleOpenUser}> Crie agora mesmo</LinkBold>
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
          }}
        >
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
          }}
        >
          <Fade in={newAccount}>
            <CreateUser></CreateUser>
          </Fade>
        </Modal>
      </WrapperLogin>
    </WraperHelper>
  );
};

export default Login;
