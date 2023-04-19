import styled from "@emotion/styled";

export const SubTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  margin-bottom: ${props => props.theme.spacing(10)};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: ${props => props.theme.spacing(16)};
`;

export const Label = styled.label`
  :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(4)};
  }
`;

export const Input = styled.input`
  font-size: 24px;
  line-height: 1.17;

  width: 368px;
  height: 72px;
  padding-top: ${props => props.theme.spacing(5.5)};
  padding-right: ${props => props.theme.spacing(6)};
  padding-bottom: ${props => props.theme.spacing(5.5)};
  padding-left: ${props => props.theme.spacing(6)};
  outline: none;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};

  ::placeholder {
    font-size: 24px;
    line-height: 1.17;
    color: ${props => props.theme.colors.text.placeholder};
  }

  :focus {
    border-color: ${props => props.theme.colors.blue.default};
  }
`;
