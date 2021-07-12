import React, { useEffect, useState } from "react";
import InputTask from "../../components/InputTask";
import Task from "../../components/Task";
import { createTask, db } from "../../firebase";
import { Container, WrapTasks, NoTasks } from "./styles";

function ToDo() {
  const [tasks, setTasks] = useState(null);
  const userId = localStorage.getItem("uid");

  const handleCreateTask = (task) => {
    createTask(userId, task);
    getTasks();
  };

  const getTasks = async () => {
    const tasksRef = db
      .collection("users")
      .doc(userId) //user logado
      .collection("tasks").orderBy('date');

    const data = await tasksRef.get();
    let newData = null;
    data.docs.map((item) => {
      if (newData) newData = [...newData, item.data()];
      else newData = [item.data()]
    });
    if (newData) setTasks(newData);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Container>
      <WrapTasks>
        {tasks
          ? tasks.map((item, index) => (
              <Task key={item.id} isDone={item.done} taskText={item.title} />
            ))
          : <NoTasks>Você ainda não tem tarefas!</NoTasks>}
      </WrapTasks>
      <InputTask createTask={handleCreateTask} />
    </Container>
  );
}

export default ToDo;
