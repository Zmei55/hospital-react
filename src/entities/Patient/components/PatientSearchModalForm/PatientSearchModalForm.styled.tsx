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

export const NameInput = styled.input`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.text.default};

  width: 650px;
  height: ${props => props.theme.spacing(18)};
  padding: 22px 24px;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  outline: none;

  :focus,
  :hover {
    border-color: ${props => props.theme.colors.blue.hover};
  }

  ::placeholder {
    font-weight: 400;
    font-size: 24px;
    line-height: 1.17;
    color: ${props => props.theme.colors.text.placeholder};
  }
`;

export const BirthDayInput = styled.input`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.text.default};

  width: 294px;
  height: ${props => props.theme.spacing(18)};
  padding: 22px 24px;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  outline: none;

  :focus,
  :hover {
    border-color: ${props => props.theme.colors.blue.hover};
  }

  ::placeholder {
    font-weight: 400;
    font-size: 24px;
    line-height: 1.17;
    color: ${props => props.theme.colors.text.placeholder};
  }
`;

export const MedicalCardInput = styled.input`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.text.default};

  width: 206px;
  height: ${props => props.theme.spacing(18)};
  padding: 22px 24px;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  outline: none;

  :focus,
  :hover {
    border-color: ${props => props.theme.colors.blue.hover};
  }

  ::placeholder {
    font-weight: 400;
    font-size: 24px;
    line-height: 1.17;
    color: ${props => props.theme.colors.text.placeholder};
  }
`;
