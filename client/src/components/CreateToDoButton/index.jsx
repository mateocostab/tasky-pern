import React from "react";
import { Button } from "./styles";

export const CreateToDoButton = ({ setOpenModal }) => {
  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };

  return <Button onClick={onClickButton}>+</Button>;
};
