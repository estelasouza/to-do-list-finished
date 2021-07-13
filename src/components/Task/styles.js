import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  min-height: 38px;

  padding: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  text-align: left;
  border-radius: 3px;
cursor: pointer;
  background: ${(props) => (props.done ? "#F3F1F7" : "#e6e4ea")};
`;

export const Text = styled.p`
  color: ${(props) => (props.done ? "#AEADB2" : "black")};
  text-decoration: ${(props) => props.done && "line-through"};

  text-decoration-color: ${(props) => (props.done ? "#AEADB2" : "black")};
`;
