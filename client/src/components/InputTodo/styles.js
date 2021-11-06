import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  width: 90%;
  max-width: 420px;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #1a2227;
`;

export const Label = styled.label`
  font-size: 26px;
  color: #1a2227;
  margin: 15px 0;
`;

export const TextArea = styled.textarea`
  border-radius: 8px;
  border: 1px solid #1a2227;
  font-size: 16px;
  padding: 12px;
  height: 96px;
  width: calc(100% - 25px);
`;

export const ButtonWrapper = styled.div`
  background-color: white;
  display: flex;
  margin: 15px 0;
`;

export const ButtonCancel = styled.button`
  padding: 15px;
  border: 0;
  background-color: transparent;
  font-size: 16px;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonAdd = styled.button`
  padding: 15px;
  border: 0;
  border-radius: 8px;
  background-color: #1a2227;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
