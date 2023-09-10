import styled from "@emotion/styled";

export const Input = styled.input`
  font-style: inherit;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.text.default};

  height: 72px;
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
