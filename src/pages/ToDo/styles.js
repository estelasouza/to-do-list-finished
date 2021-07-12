import styled from "styled-components";

export const Container = styled.div`
  min-width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const WrapTasks = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  margin-bottom: 30px;
`;

export const NoTasks = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  color: #bcbabf;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
