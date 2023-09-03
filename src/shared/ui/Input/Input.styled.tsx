import styled from "@emotion/styled";

export const Input = styled.input`
  font-style: inherit;
  color: ${props => props.theme.colors.text.default};

  padding: 22px 24px;
  outline: none;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};

  ::placeholder {
    color: ${props => props.theme.colors.text.placeholder};
  }

  :focus,
  :hover {
    border-color: ${props => props.theme.colors.blue.default};
  }
`;
