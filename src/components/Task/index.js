import React, { useEffect, useState } from "react";
import { Container, Text } from "./styles";

function Task({ taskText, isDone }) {
  const [done, setDone] = useState(false);
  useEffect(() => isDone && setDone(isDone), [isDone]);
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
