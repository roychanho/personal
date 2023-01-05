import { createContext, useReducer, useContext, useState } from "react";
import TodoReducer, { ACTIONS, initState } from "../components/TodoReducer";

export const TodoContext = createContext(initState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initState);
  const [todo, setTodo] = useState({ id: 0, todoContent: "" });
  const [editMode, setEditMode] = useState(false);

  const addTodo = (todoContent) => {
    const todo = todoObj(todoContent);
    const newTodo = state.todos.concat(todo);

    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { todo: newTodo },
    });
  };

  const toggleTodo = (todoId) => {
    const newTodo = state.todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });

    dispatch({
      type: ACTIONS.TOGGLE_TODO,
      payload: { todo: newTodo },
    });
  };

  const deleteTodo = (todoId) => {
    const newTodo = state.todos.filter((todo) => todo.id !== todoId);
    dispatch({
      type: ACTIONS.DELETE_TODO,
      payload: {
        todo: newTodo,
      },
    });
  };

  const updateTodo = (todoId, todoContent) => {
    const newTodo = state.todos.map((todo) => {
      // check is it current edit id
      if (todo.id === todoId) {
        return {
          ...todo,
          todoContent,
        };
      } else {
        return todo;
      }
    });

    dispatch({
      type: ACTIONS.EDIT_TODO,
      payload: {
        todo: newTodo,
      },
    });
  };

  const value = {
    todos: state.todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    todo,
    setTodo,
    editMode,
    setEditMode,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const todoObj = (todoContent) => {
  return {
    id: Math.floor(Math.random() * 100000),
    todoContent,
    complete: false,
  };
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    console.log("error");
  }
  return context;
};
