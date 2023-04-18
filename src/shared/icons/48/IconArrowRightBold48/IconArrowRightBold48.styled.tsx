import styled from "@emotion/styled";

export const Icon = styled.svg`
  fill: ${props => props.theme.colors.white};

  :not(:first-child) {
    margin-left: ${props => props.theme.spacing(2)};
  }

  :not(:last-child) {
    margin-right: ${props => props.theme.spacing(2)};
  }
`;
