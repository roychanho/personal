import React, { useContext } from "react";
import { TodoContext } from "../constants/TodoContext";

const Todo = () => {
  const { todos, toggleTodo, deleteTodo, setTodo, setEditMode } =
    useContext(TodoContext);

  const enableEditMode = (id, todoContent) => {
    setEditMode(true);
    setTodo({
      id,
      todoContent,
    });
  };

  return (
    <>
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <span
            style={{ textDecoration: todo.complete ? "line-through" : null }}
          >
            {todo.todoContent}
          </span>
          <button className="px-10 toggle" onClick={() => toggleTodo(todo.id)}>
            {todo?.complete ? "Cancel" : "Complete"}
          </button>
          <button
            className="edit"
            onClick={() => enableEditMode(todo.id, todo.todoContent)}
          >
            Edit
          </button>
          <button className="delete" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default Todo;
