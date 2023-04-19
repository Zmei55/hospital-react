import styled from "@emotion/styled";
import { ReactComponent as iconFindDocument } from "shared/icons/findDocument.svg";

export const Icon = styled(iconFindDocument)`
  fill: ${props => props.theme.colors.blue.default};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.blue.hover};
  }

  :active {
    fill: ${props => props.theme.colors.blue.pressed};
  }
`;
