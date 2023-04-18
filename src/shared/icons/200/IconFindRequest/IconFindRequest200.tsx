import icons from "../icons.svg";

import { Icon } from "./IconFindRequest200.styled";

export const IconFindRequest200: React.FC = () => {
  return (
    <Icon>
      <use href={`${icons}#find-document-200`} />
    </Icon>
  );
};
