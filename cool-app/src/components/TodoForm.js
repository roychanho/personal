import React, { useState, useContext } from "react";
import { TodoContext, useTodo } from "../constants/TodoContext";

const TodoForm = () => {
  // const { addTodo } = useContext(TodoContext);
  const { addTodo } = useTodo();
  const [todoContent, setTodoContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoContent);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoContent}
        onChange={(e) => setTodoContent(e.target.value)}
        placeholder="Type in something..."
      />
    </form>
  );
};

export default TodoForm;
