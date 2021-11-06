import React, { useState } from "react";
import { useTodoContext } from "../../context/TodoContext";
import { Check, CheckCompleted, CheckUncompleted } from "./styles";

export const CompleteTodo = ({ todo }) => {
  const { completeTodo } = useTodoContext();

  const [completed, setCompleted] = useState(todo.completed);

  const onComplete = () => {
    console.log(todo.completed);

    setCompleted("true");
    completeTodo(todo.todo_id, completed);
  };

  return (
    <>
      <Check onClick={onComplete} data-target={`#id${todo.todo_id}`}>
        {!completed ? <CheckUncompleted /> : <CheckCompleted />}
      </Check>
    </>
  );
};
