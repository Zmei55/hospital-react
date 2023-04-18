import icons from "../icons.svg";

import { Icon } from "./IconWhiteCross48.styled";

export const IconWhiteCross48: React.FC = () => {
  return (
    <Icon>
      <use href={`${icons}#cross-48`} />
    </Icon>
  );
};
