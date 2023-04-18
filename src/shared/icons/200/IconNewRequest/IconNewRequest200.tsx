import icons from "../icons.svg";

import { Icon } from "./IconNewRequest200.styled";

export const IconNewRequest200: React.FC = () => {
  return (
    <Icon>
      <use href={`${icons}#create-document-200`} />
    </Icon>
  );
};
