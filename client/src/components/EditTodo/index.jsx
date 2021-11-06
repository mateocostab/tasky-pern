import React, { useState } from "react";
import { useTodoContext } from "../../context/TodoContext";
import { Modal } from "../../modals";
import {
  ButtonAdd,
  ButtonCancel,
  ButtonWrapper,
  Form,
  Label,
  TextArea,
} from "../InputTodo/styles";
import { Edit } from "./styles";
export const EditTodo = ({ todo }) => {
  const { updateTodo } = useTodoContext();

  const [openEditModal, setOpenEditModal] = useState(false);
  const [todoDescription, setTodoDescription] = useState(todo.description);

  const onChange = (e) => {
    setTodoDescription(e.target.value);
  };

  const onCancel = () => {
    setOpenEditModal(false);
  };

  const updateDescription = async (e) => {
    e.preventDefault();
    updateTodo(todo.todo_id, todoDescription);
  };

  return (
    <>
      <Edit
        onClick={() => setOpenEditModal(true)}
        data-target={`#id${todo.todo_id}`}
      />
      {!!openEditModal && (
        <Modal>
          <Form onSubmit={updateDescription}>
            <Label>Edita tu tarea</Label>

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
              <ButtonAdd type="submit">Actualizar</ButtonAdd>
            </ButtonWrapper>
          </Form>
        </Modal>
      )}
    </>
  );
};
