import styled from "@emotion/styled";

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${props => props.theme.colors.error.default};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.error.hover};
  }

  :active {
    fill: ${props => props.theme.colors.error.pressed};
  }

  :disabled {
    fill: ${props => props.theme.colors.error.disabled};
  }
`;
