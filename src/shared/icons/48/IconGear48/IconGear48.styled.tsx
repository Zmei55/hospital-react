import styled from "@emotion/styled";

export const Icon = styled.svg`
  fill: ${props => props.theme.colors.primary.default};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.primary.hover};
  }

  :active {
    fill: ${props => props.theme.colors.primary.pressed};
  }

  :disabled {
    fill: ${props => props.theme.colors.primary.disabled};
  }
`;
