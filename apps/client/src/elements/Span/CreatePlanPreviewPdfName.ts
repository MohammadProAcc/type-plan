import { Span } from "./Span";
import styled from 'styled-components'

export const CreatePlanPreviewPdfName = styled(Span).attrs({
  title: "برای حذف فایل کلیک کنید"
})`
  margin-right: 1rem;

  &:hover {
    cursor: pointer;

    padding-left: 1.5rem;
    background-image: url(/svg/remove.svg);
    background-repeat: no-repeat;
    background-size: 1rem;
    background-position: center left;
  }
`;