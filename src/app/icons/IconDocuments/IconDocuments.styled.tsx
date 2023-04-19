import styled from "@emotion/styled";
import { ReactComponent as iconDocuments } from "shared/icons/documents.svg";

export const Icon = styled(iconDocuments)`
  fill: ${props => props.theme.colors.blue.default};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.blue.hover};
  }

  :active {
    fill: ${props => props.theme.colors.blue.pressed};
  }
`;
