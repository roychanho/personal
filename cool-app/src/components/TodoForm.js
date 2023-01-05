import React, { useState, useContext } from "react";
import { TodoContext, useTodo } from "../constants/TodoContext";

const TodoForm = () => {
  // const { addTodo } = useContext(TodoContext);
  const { addTodo, todo, setTodo, editMode, updateTodo, setEditMode } =
    useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editMode) {
      addTodo(todo.todoContent);
    } else {
      updateTodo(todo.id, todo.todoContent);
      setEditMode(false);
    }

    setTodo({
      id: 0,
      todoContent: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo.todoContent}
        onChange={(e) =>
          setTodo((prev) => ({
            ...prev,
            todoContent: e.target.value,
          }))
        }
        placeholder="Type in something..."
      />
    </form>
  );
};

export default TodoForm;
