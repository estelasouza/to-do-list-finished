import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background: blue;
  position: fixed;
  bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InputWraper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 15px;
  padding: 15px;
  position: relative;
  background: white;
`;

export const Input = styled.input`
  max-width: 80%;
  display: flex;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 15px;

  background: #f3f1f7;
  border-radius: 3px;
  border:none;
  padding:15px;
`;

export const SendTaskButton = styled.button`
  width: 50px;
  height: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 15px;

  background: #6FCF97;
border-radius: 4px;

border:none;
color:white;
cursor: pointer;
&::placeholder{color: #8F8D93;}
}
`;
