import styled from "@emotion/styled";
import search from "../../assets/static/search-icon.svg";

export const TodoSearchWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  display: block;
  background: #0e151a;
  border-radius: 8px;
  border: 0;
  margin: 0 auto;

  width: 90%;
  max-width: 420px;
  height: 64px;
  padding: 20px 20px 20px 50px;
  font-size: 24px;

  color: #fff;
  box-shadow: 0px 0px 5px rgba(14, 21, 26, 0.3);
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 20px;

  &::placeholder {
    color: #3e5667;
  }
`;
