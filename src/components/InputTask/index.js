import React, { useState } from "react";

import { Form, InputWraper, Input, SendTaskButton } from "./styles";

function InputTask({ createTask }) {
  const [input, setInput] = useState("");
  const handleChange = (e) => setInput(e.target.value);
  const handleCreateTask = (e) => {
    e.preventDefault()
    setInput('')
    createTask(input)}
  return (
    <Form>
      <InputWraper>
        <Input
          type="text"
          placeholder="Crie uma nova tarefa..."
          value={input}
          onChange={handleChange}
        />
        <SendTaskButton onClick={handleCreateTask}>OK</SendTaskButton>
      </InputWraper>
    </Form>
  );
}

export default InputTask;
