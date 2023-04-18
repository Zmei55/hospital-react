import icons from "../icons.svg";

import { Icon } from "./IconRedCross24.styled";

export const IconRedCross24: React.FC = () => {
  return (
    <Icon>
      <use href={`${icons}#cross-24`} />
    </Icon>
  );
};
