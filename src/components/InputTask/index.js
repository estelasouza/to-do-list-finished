import React from 'react';

import { Container, InputWraper, Input, SendTaskButton } from './styles';

function InputTask() {
  return <Container>
      <InputWraper>
      <Input type="text" placeholder="Crie uma nova tarefa..." />
      <SendTaskButton>OK</SendTaskButton>
      </InputWraper>
  </Container>;
}

export default InputTask;