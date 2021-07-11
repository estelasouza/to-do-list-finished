import React from "react";
import LogoImg from "../../assets/img/logo.svg";

import { Container, Logo, Logout } from "./styles";

function NavBar() {
  return (
    <Container>
      <Logo src={LogoImg} alt="ToDo list logo" />
      <Logout>Sair</Logout>
    </Container>
  );
}

export default NavBar;
