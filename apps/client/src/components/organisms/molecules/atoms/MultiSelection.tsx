import { MultiSelectionContainer, MultiSelectionOption } from "elements";
import { useNonInitialEffect } from "hooks";
import _ from "lodash";
import { useState } from "react";
import { KeyVal } from "types";

interface MultiSelectionProps {
  initial?: KeyVal<any>;
  options: KeyVal<any>[];
  callback: (item: KeyVal<any>) => void;
}

export const MultiSelection: React.FC<MultiSelectionProps> = ({
  initial,
  options,
  callback,
}) => {
  const [active, setActive] = useState(initial);

  useNonInitialEffect(() => {
    callback(active);
  }, [active]);

  return (
    <MultiSelectionContainer>
      {options?.map(option => (
        <MultiSelectionOption
          key={Math.random()}
          active={_.isEqual(option, active)}
          onClick={() => setActive(option)}
        >
          {option.key}
        </MultiSelectionOption>
      ))}
    </MultiSelectionContainer>
  );
};
