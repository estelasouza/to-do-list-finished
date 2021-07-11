import React from "react";
import InputTask from "../../components/InputTask";
import Task from "../../components/Task";

import { Container, WrapTasks } from "./styles";

function ToDo() {
  return (
    <Container>
      <WrapTasks>
        <Task key={1} taskText="primeira tarefa com nome giganteeeeee" />
        <Task key={2} taskText="primeira tarefa com nome giganteeeeee" />
        <Task key={3} taskText="primeira tarefa com nome giganteeeeee" />
        <Task key={4} taskText="primeira tarefa com nome giganteeeeee" />
        <Task key={5} taskText="primeira tarefa com nome giganteeeeee" />
        <Task key={6} taskText="primeira tarefa com nome giganteeeeee" />
      </WrapTasks>
      <InputTask />
    </Container>
  );
}

export default ToDo;
