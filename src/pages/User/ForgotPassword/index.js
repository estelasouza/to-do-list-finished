import styled from "styled-components";
import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import firebase from "firebase";
import {ParagrafMargin,  WrapperForgotPassword } from "./styles";
import { DivHidden } from "../Login/styles";
import Alert from "@material-ui/lab/Alert";

const ForgotPassoword = () => {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState("");
  const [showDone, setShowDone] = useState("");
  const [message, setMessage] = useState("");

  const authUser = firebase.auth();
  const sendEmail = (email) => {
    authUser
      .sendPasswordResetEmail(email)
      .then((e) => {
        console.log("deu certo", e);
        setMessage("Verify your email to reset your password ");
        setShowDone("inline");
        setEmail("");
        setShow("none");
      })
      .catch((e) => {
        setMessage(e.message);
        setShow("inline");
        setShowDone("none");
      });
  };

  return (
    <WrapperForgotPassword>
      <h2>Recuperar a senha</h2>
      <ParagrafMargin>Email</ParagrafMargin>
      <Input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <DivHidden divDisplay={show}>
        <Alert severity="error">{message}</Alert>
      </DivHidden>
      <DivHidden divDisplay={showDone}>
        <Alert severity="success">{message}</Alert>
      </DivHidden>
      <Button onClick={() => sendEmail(email)}>Recuperar</Button>
    </WrapperForgotPassword>
  );
};

export default ForgotPassoword;
