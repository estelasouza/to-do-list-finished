import React, { useEffect, useState } from "react";
import InputTask from "../../components/InputTask";
import Task from "../../components/Task";
import { db } from "../../firebase";
import { Container, WrapTasks, NoTasks } from "./styles";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const userId = localStorage.getItem("uid") || "00000";

  const handleCreateTask = (task) => {
    createTask(task);
    getTasks();
  };

  const createTask = (task) =>
    db
      .collection("users")
      .doc(userId) //user logado
      .collection("tasks")
      .doc() //doc() cria um novo doc com um id aleatorio
      .set({ title: task, done: false, date: Date.now() });

  const updateTask = async (task, status) => {
    db.collection("users")
      .doc(userId) //user logado
      .collection("tasks")
      .doc(task.id) //doc() cria um novo doc com um id aleatorio
      .update({ done: status });
  };

  const deleteTask = async (task, getTasks) => {
    db.collection("users")
      .doc(userId) //user logado
      .collection("tasks")
      .doc(task.id) //doc() cria um novo doc com um id aleatorio
      .delete();
    getTasks();
  };

  const getTasks = async () => {
    const tasksRef = db
      .collection("users")
      .doc(userId) //user logado
      .collection("tasks")
      .orderBy("date");

    const data = await tasksRef.get();
    let newData = [];
    data.docs.forEach((item) => {
      newData = [...newData, { ...item.data(), id: item.id }];
    });
    setTasks(newData);
  };

  const handleUpdateTask = (task, status) => {
    updateTask(task, status);
  };

  const handleDeleteTask = (task) => {
    deleteTask(task, getTasks);
  };
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Container>
      <WrapTasks>
        {tasks && tasks.length > 0 ? (
          tasks.map((item) => (
            <Task
              key={item.id}
              task={item}
              updateTask={handleUpdateTask}
              deleteTask={handleDeleteTask}
              getTasks={getTasks}
            />
          ))
        ) : (
          <NoTasks>Você ainda não tem tarefas!</NoTasks>
        )}
      </WrapTasks>
      <InputTask createTask={handleCreateTask} />
    </Container>
  );
}

export default ToDo;
