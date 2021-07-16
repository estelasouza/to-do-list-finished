import React from "react";
import LogoImg from "../../assets/img/logo.svg";
import { useHistory } from "react-router-dom";
import { Container, Logo, Logout } from "./styles";
import firebase from "firebase";
function NavBar({ handleLogOut }) {
  const history = useHistory();
  const authUser = firebase.auth();
  const token = localStorage.getItem("uid");

  const Logoutt = () => {
    localStorage.clear();
    authUser.signOut();
    history.push("/login");
    handleLogOut();
  };

  return (
    <Container>
      <a href="/">
        <Logo src={LogoImg} alt="ToDo list logo" />
      </a>
      {token && <Logout onClick={() => Logoutt()}>Sair</Logout>}
    </Container>
  );
}

export default NavBar;
