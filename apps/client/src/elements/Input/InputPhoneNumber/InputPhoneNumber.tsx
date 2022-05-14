import styled from "styled-components";
import { Input } from "../Input";

export const InputPhoneNumber = styled(Input).attrs({
  type: "tel",
})`
  margin: 1rem;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
`;
