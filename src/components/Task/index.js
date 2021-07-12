import React, { useEffect, useState } from "react";
import { Container, Text } from "./styles";

function Task({ updateTask, task, deleteTask, getTasks }) {
  const [done, setDone] = useState(false);
  useEffect(() => task && task.done && setDone(task.done), [task]);
  const handleDone = () => {
    console.log(task.id);
    updateTask(task, !done);
    setDone((prev) => !prev);
  };

  const handleDelete = () => {
    deleteTask(task);
    getTasks();
  };

  return (
    <Container done={done} onClick={handleDone} onAuxClick={handleDelete}>
      <Text done={done}>{task.title}</Text>
    </Container>
  );
}

export default Task;
