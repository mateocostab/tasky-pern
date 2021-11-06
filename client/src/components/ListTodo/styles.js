import styled from "@emotion/styled";
import { FaTrash } from "react-icons/fa";

export const List = styled.li`
  position: relative;
  background-color: #fff;
  box-shadow: 0px 0px 12px #0f141a;
  margin: 2rem auto;
  width: 90%;
  max-width: 420px;
  height: 100px;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:hover svg {
    display: unset;
  }
`;

export const Paragraph = styled.p`
  position: absolute;
  font-weight: bold;
  font-size: 18px;
  top: calc(60% - 11px);
`;

export const Trash = styled(FaTrash)`
  position: absolute;
  top: calc(60% - 9px);
  left: calc(100% - 32px);
  color: #a5a5a5;
  &:hover {
    color: red;
  }
`;
