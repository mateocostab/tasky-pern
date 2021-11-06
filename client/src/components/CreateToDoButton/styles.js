import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: #ffbb54;
  box-shadow: 0px 2px 5px #3f2d12;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 50px;
  position: fixed;
  bottom: 24px;
  right: calc(50% - 32px);
  font-weight: bold;
  color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  z-index: 1;
  transform: rotate(0);
  transition: 0.3s ease;
  &:hover {
    transform: rotate(224deg);
  }
`;
