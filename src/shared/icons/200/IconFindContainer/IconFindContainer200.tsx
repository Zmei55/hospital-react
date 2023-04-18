import icons from "../icons.svg";

import { Icon } from "./IconFindContainer200.styled";

export const IconFindContainer200: React.FC = () => {
  return (
    <Icon>
      <use href={`${icons}#find-test-tube-200`} />
    </Icon>
  );
};
