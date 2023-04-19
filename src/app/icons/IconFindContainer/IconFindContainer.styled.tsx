import styled from "@emotion/styled";
import { ReactComponent as iconFindContainer } from "shared/icons/findContainer.svg";

export const Icon = styled(iconFindContainer)`
  fill: ${props => props.theme.colors.blue.default};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.blue.hover};
  }

  :active {
    fill: ${props => props.theme.colors.blue.pressed};
  }
`;
