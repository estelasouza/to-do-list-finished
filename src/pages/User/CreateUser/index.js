import styled from "styled-components";
import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { ParagrafMargin } from "../ForgotPassword/styles";
import firebase from "firebase";
import { DivHidden } from "../Login/styles";
import Alert from "@material-ui/lab/Alert";
import { WrapperCreateUser, H2} from "./styles";

const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("");
  const [showDone, setShowDone] = useState("");
  const [message, setMessage] = useState("");

  const submitUser = (email, password) => {
    const authUser = firebase.auth();
    authUser
      .createUserWithEmailAndPassword(email, password)
      .then((e) => {
        console.log(e);
        setMessage("create new user");
        setShowDone("inline");
        setEmail("");
        setShow("none");

        setPassword("");
      })
      .catch((e) => {
        setMessage(e.message);
        setShow("inline");
        setShowDone("none");

        console.log(e);
      });
  };
  return (
    <WrapperCreateUser>
      <H2>Criar novo usuario</H2>
      <ParagrafMargin>Email</ParagrafMargin>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <ParagrafMargin>Password</ParagrafMargin>
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <DivHidden divDisplay={show}>
        <Alert severity="error">{message}</Alert>
      </DivHidden>
      <DivHidden divDisplay={showDone}>
        <Alert severity="success">{message}</Alert>
      </DivHidden>
      <Button onClick={() => submitUser(email, password)}>Criar conta</Button>
    </WrapperCreateUser>
  );
};

export default CreateUser;
