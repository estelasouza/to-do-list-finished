import React, { useState } from "react";
import {Container, Text} from './styles'

function Task({ taskText }) {
  const [done, setDone] = useState(false);
  const handleDone = () => {
    setDone((prev) => !prev);
  };
  return (
    <Container done={done} onClick={handleDone}>
        <Text done={done}>{taskText}</Text>
      
    </Container>
  );
}

export default Task;
