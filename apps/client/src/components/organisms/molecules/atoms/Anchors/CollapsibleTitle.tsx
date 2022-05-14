import { ClearButton, CollapsibleTitleSpan } from "elements";
import {} from "elements/Span/CollapsibleTitleSpan";
import { Color } from "styles";
import { Activable } from "types";
import { ClearSvg } from "../Svgs/ClearSvg";

interface CollapsibleTitleProps extends Activable {
  callback: any;
}

export const CollapsibleTitle: React.FC<CollapsibleTitleProps> = ({
  callback,
  children,
  active,
}) => (
  <CollapsibleTitleSpan>
    {children}
    <ClearButton
      onClick={callback}
      active={active}
      disabled={!active}
    >
      <ClearSvg Color={Color.Error} />
    </ClearButton>
  </CollapsibleTitleSpan>
);
