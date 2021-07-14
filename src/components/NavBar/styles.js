import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 68px;
  height: 40px;
  cursor: pointer;
`;

export const Logout = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding:5px;
  border-radius: 6px;
  &:hover{
    background: rgba(0,0,0,0.1);
  }
  &::after{
    content: " ";
    width: 50px;
    height:50px;
    position: absolute;
  }
`;
