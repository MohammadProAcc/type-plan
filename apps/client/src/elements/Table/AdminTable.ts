import styled from "styled-components";
import { Color } from "styles";
import { Table } from "./Table";

export const AdminTableEl = styled(Table)`
  width: 100%;

  tr {
    :nth-child(odd) {
      background-color: ${Color.Background};
    }
  }

  th, td {
    min-height: 4rem;
    padding: 1rem;
  }
`;
