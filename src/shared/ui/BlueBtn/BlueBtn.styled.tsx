import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.text.white};
  fill: ${props => props.theme.colors.white};

  background-color: ${props => props.theme.colors.};
  border-color: transparent;
  border-radius: ${props => props.theme.borderRadius};

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.blue.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.blue.pressed};
  }

  :disabled {
    background-color: ${props => props.theme.colors.blue.disabled};
  }

  :not(:last-child) {
    margin-right: ${props => props.theme.spacing(6)};
  }
`;
