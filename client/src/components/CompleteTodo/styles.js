import styled from "@emotion/styled";

import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";

export const Check = styled.span`
  position: absolute;
  font-size: 24px;
  left: calc(10% - 24px);
  top: 15px;
`;

export const CheckCompleted = styled(FaCheckCircle)`
  color: green;
`;

export const CheckUncompleted = styled(FaRegCheckCircle)`
  color: red;
`;
