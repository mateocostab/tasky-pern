import React, { useState } from "react";
import {
  ButtonAdd,
  ButtonCancel,
  ButtonWrapper,
  Form,
  Label,
  TextArea,
} from "./styles";
import { useTodoContext } from "../../context/TodoContext";

export const InputTodo = () => {
  const { todoDescription, setTodoDescription, setOpenModal, addTodo } =
    useTodoContext();

  const onChange = (e) => {
    setTodoDescription(e.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <>
      <Form onSubmit={onSubmitForm}>
        <Label>Escribe tu tarea</Label>

        <TextArea
          name="toDo"
          cols="30"
          rows="10"
          value={todoDescription}
          onChange={onChange}
          placeholder="Pasear a Max"
        ></TextArea>

        <ButtonWrapper>
          <ButtonCancel type="button" onClick={onCancel}>
            Cancelar
          </ButtonCancel>
          <ButtonAdd type="submit">Añadir</ButtonAdd>
        </ButtonWrapper>
      </Form>
    </>
  );
};
