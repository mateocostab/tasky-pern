import React, { createContext, useContext, useState } from "react";

export const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [todos, setTodos] = useState([]);

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.description.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = async () => {
    try {
      const body = { todoDescription };
      const response = await fetch("/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      setOpenModal(false);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateTodo = async (id, todoDescription) => {
    try {
      const body = { todoDescription };
      const response = await fetch(`/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const completeTodo = async (id, completed) => {
    try {
      const body = { completed };
      const response = await fetch(`/todos/complete/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todoDescription,
        setTodoDescription,
        completeTodo,
        deleteTodo,
        addTodo,
        setOpenModal,
        openModal,
        setTodos,
        getTodos,
        todos,
        updateTodo,
        setSearchValue,
        searchValue,
        searchedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
