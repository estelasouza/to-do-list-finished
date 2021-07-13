import React from "react";
import LogoImg from "../../assets/img/logo.svg";

import { Container, Logo, Logout } from "./styles";

function NavBar() {
  return (
    <Container>
      <a href="/">
        <Logo src={LogoImg} alt="ToDo list logo" />
      </a>
      <Logout>Sair</Logout>
    </Container>
  );
}

export default NavBar;
