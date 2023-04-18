import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  background-color: ${props => props.theme.colors.error.default};
  border-color: transparent;
  border-radius: ${props => props.theme.borderRadius};

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.error.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.error.pressed};
  }

  :not(:last-child) {
    margin-right: ${props => props.theme.spacing(6)};
  }
`;
