import React from "react";
import { useTodoContext } from "../../context/TodoContext";
import { Title } from "./styles";

export const TodoCounter = () => {
  const { totalTodos, completedTodos } = useTodoContext();
  return (
    <Title>
      Has completado {completedTodos} de {totalTodos} tareas
    </Title>
  );
};
