import styled from "@emotion/styled";

export const Button = styled.button`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.text.body};

  background-color: ${props => props.theme.colors.grey.default};
  border-color: transparent;
  border-radius: ${props => props.theme.borderRadius};

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.grey.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.grey.pressed};
  }

  :disabled {
    background-color: ${props => props.theme.colors.grey.disabled};
  }
`;
