import React from "react";
import { useTodoContext } from "../../context/TodoContext";
import { Modal } from "../../modals";
import { CreateToDoButton } from "../CreateToDoButton";
import { Header } from "../Header";
import { InputTodo } from "../InputTodo";
import { ListTodos } from "../ListTodo";
import { TodoSearch } from "../TodoSearch";

export const Home = () => {
  const { openModal, setOpenModal } = useTodoContext();
  return (
    <>
      <Header />
      <TodoSearch />

      <ListTodos />
      <CreateToDoButton setOpenModal={setOpenModal} />
      {!!openModal && (
        <Modal>
          <InputTodo />
        </Modal>
      )}
    </>
  );
};
