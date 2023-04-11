import styled from "@emotion/styled";
import { ReactComponent as iconCreateDocument } from "shared/icons/createDocument.svg";

export const Icon = styled(iconCreateDocument)`
  fill: ${props => props.theme.colors.primary.default};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.primary.hover};
  }

  :active {
    fill: ${props => props.theme.colors.primary.pressed};
  }
`;
