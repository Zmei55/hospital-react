import styled from "@emotion/styled";
import { ReactComponent as iconFindContainer } from "shared/icons/findContainer.svg";

export const Icon = styled(iconFindContainer)`
  fill: ${props => props.theme.colors.primary.default};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.primary.hover};
  }

  :active {
    fill: ${props => props.theme.colors.primary.pressed};
  }
`;
