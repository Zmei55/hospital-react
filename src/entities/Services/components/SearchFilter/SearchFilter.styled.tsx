import styled from "@emotion/styled";

export const Filter = styled.div`
  width: 842px;
  margin-right: 66px;
`;

export const FilterInput = styled.input`
  font: inherit;
  font-size: 32px;
  line-height: 1.13;
  color: ${props => props.theme.colors.text.default};
  width: 100%;
  height: 72px;
  margin-bottom: ${props => props.theme.spacing(12)};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  outline: none;

  ::placeholder {
    color: ${props => props.theme.colors.text.placeholder};
  }
`;
