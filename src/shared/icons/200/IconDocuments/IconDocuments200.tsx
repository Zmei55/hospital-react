import icons from "../icons.svg";

import { Icon } from "./IconDocuments200.styled";

export const IconDocuments200: React.FC = () => {
  return (
    <Icon>
      <use href={`${icons}#find-test-tube-200`} />
    </Icon>
  );
};
