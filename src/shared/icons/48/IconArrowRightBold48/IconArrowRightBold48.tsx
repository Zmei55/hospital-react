import icons from "../icons.svg";

import { Icon } from "./IconArrowRightBold48.styled";

export const IconArrowRightBold48: React.FC = () => {
  return (
    <Icon>
      <use href={`${icons}#caret-right-bold-48`} />
    </Icon>
  );
};
