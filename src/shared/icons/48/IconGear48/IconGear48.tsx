import icons from "../icons.svg";

import { Icon } from "./IconGear48.styled";

export const IconGear48: React.FC = () => {
  return (
    <Icon>
      <use href={`${icons}#caret-right-bold-48`} />
    </Icon>
  );
};
