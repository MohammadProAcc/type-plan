import { Label } from "./Label";
import styled from 'styled-components'
import { Color, Radius, TimeStep } from "styles";
import { Stylable, FileInputStatus } from "types";

interface FileInputLabelProps extends Stylable {
  status: FileInputStatus
}

export const FileInputLabel = styled(Label).attrs<FileInputLabelProps>(props => ({
  title: props.status === "loading"
    ? "در حال بارگذاری..."
    : props.status === "succeed"
      ? "با موفقیت بارگذاری شد"
      : props.status === "failed"
        ? "بارگذاری موفقیت آمیز نبود" :
        "بارگذاری فایل"
})) <FileInputLabelProps>
  `
  width: 2rem;
  height: 2rem;
  border-radius: ${Radius.l1};
  margin-bottom: 0;

  background-image: url(/svg/upload${props => props.status && `-${props.status}`}.svg);
  background-repeat: no-repeat;
  background-size: 1.5rem;
  background-position: center;

  transition: ${TimeStep.quick};

  &:hover {
    cursor: pointer;
    background-color: ${Color.BackgroundSecondary};
  }

  ${props => props.Style}
`;