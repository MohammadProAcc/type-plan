import router from "next/router";
import styled from "styled-components";
import { Button } from "./Button";

export const ClearAllButton = styled(Button).attrs({
  pure: true,
  onClick: () => router.push({ query: {} }),
})`
  height: 100%;
  padding: 0;
  
  display: inline-flex;
`;
