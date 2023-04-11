import styled from "@emotion/styled";
import { ReactComponent as iconFindDocument } from "shared/icons/findDocument.svg";

export const Icon = styled(iconFindDocument)`
  fill: ${props => props.theme.colors.primary.default};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.primary.hover};
  }

  :active {
    fill: ${props => props.theme.colors.primary.pressed};
  }
`;
