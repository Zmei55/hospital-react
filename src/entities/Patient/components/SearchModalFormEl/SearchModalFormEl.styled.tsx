import styled from "@emotion/styled";
import { InputEl } from "shared";

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

export const Input = styled(InputEl)`
  font-size: 24px;
  line-height: 1.17;

  height: 72px;
`;

export const InputPatientName = styled(Input)`
  width: 650px;
`;

export const InputBirthDay = styled(Input)`
  width: 294px;
`;

export const InputCardNumber = styled(Input)`
  width: 206px;
`;
