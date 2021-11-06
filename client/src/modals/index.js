import React from "react";
import ReactDOM from "react-dom";
import { ModalBackground } from "./styles";

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <ModalBackground>{children}</ModalBackground>,
    document.getElementById("modal")
  );
};
