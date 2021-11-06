import React, { useEffect } from "react";
import { useTodoContext } from "../../context/TodoContext";
// import { CompleteTodo } from "../CompleteTodo";
import { EditTodo } from "../EditTodo";

import { List, Paragraph, Trash } from "./styles";

export const ListTodos = () => {
  const { deleteTodo, getTodos, searchedTodos } = useTodoContext();

  //Complete todo function

  //Delete todo function

  const onDelete = async (id) => {
    deleteTodo(id);
  };
  //Get Todo Function

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      {searchedTodos.map((todo, index) => {
        return (
          <>
            <List key={todo.todo_id}>
              {/* <CompleteTodo todo={todo} /> */}
              <Paragraph>{todo.description}</Paragraph>
              <EditTodo todo={todo} />
              <Trash onClick={() => onDelete(todo.todo_id)} />
            </List>
          </>
        );
      })}
    </>
  );
};
