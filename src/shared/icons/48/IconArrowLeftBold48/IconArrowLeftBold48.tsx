import icons from "../icons.svg";

import { Icon } from "./IconArrowLeftBold48.styled";

export const IconArrowLeftBold48: React.FC = () => {
  return (
    <Icon>
      <use href={`${icons}#caret-left-bold-48`} />
    </Icon>
  );
};
