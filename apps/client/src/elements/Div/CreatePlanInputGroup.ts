import { InputGroup } from "./InputGroup";
import styled from 'styled-components'

export const CreatePlanInputGroup = styled(InputGroup)`
  align-items: ${props => !props.col && "center"};
`;