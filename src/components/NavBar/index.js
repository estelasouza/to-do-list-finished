import React from "react";
import LogoImg from "../../assets/img/logo.svg";
import { useHistory } from "react-router-dom";
import { Container, Logo, Logout } from "./styles";
import firebase from "firebase";
function NavBar() {
  const history =  useHistory()
  const authUser = firebase.auth()

  const Logoutt = () =>{
    localStorage.clear()
    history.push('/login')
    authUser.signOut()
  }
  return (
    <Container>
      <a href="/">
        <Logo src={LogoImg} alt="ToDo list logo" />
      </a>
      <Logout onClick={()=>Logoutt()}>Sair</Logout>
    </Container>
  );
}

export default NavBar;
