import styled from "@emotion/styled";

export const Icon = styled.svg`
  fill: ${props => props.theme.colors.text.body};
  width: 48px;
  height: 48px;

  :not(:last-child) {
    margin-right: ${props => props.theme.spacing(7)};
  }
`;
