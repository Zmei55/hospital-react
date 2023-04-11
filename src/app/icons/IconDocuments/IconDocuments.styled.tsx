import styled from "@emotion/styled";
import { ReactComponent as iconDocuments } from "shared/icons/documents.svg";

export const Icon = styled(iconDocuments)`
  fill: ${props => props.theme.colors.primary.default};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.primary.hover};
  }

  :active {
    fill: ${props => props.theme.colors.primary.pressed};
  }
`;
