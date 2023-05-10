import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;

  padding-top: ${props => props.theme.spacing(16)};
  padding-right: ${props => props.theme.spacing(6)};
  padding-left: ${props => props.theme.spacing(6)};
  margin-bottom: ${props => props.theme.spacing(18)};
`;

export const Label = styled.label`
  display: block;

  :not(:last-child) {
    margin-right: ${props => props.theme.spacing(4)};
  }
`;
