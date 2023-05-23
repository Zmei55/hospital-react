import styled from "@emotion/styled";

export const ModalBody = styled.div`
  height: 786px;
  padding: ${props => props.theme.spacing(6)} ${props => props.theme.spacing(8)};
`;

export const Form = styled.form`
  display: flex;

  height: 100%;
`;

export const Filter = styled.div`
  display: flex;

  /* width: 664px; */
  margin-right: 66px;
`;

export const SelectedServicesBox = styled.div`
  width: 604px;
  padding-left: 50px;
  border-left: ${props => props.theme.border};
`;

export const SelectedServicesTitle = styled.h4`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14;
  color: ${props => props.theme.colors.text.default};

  margin-bottom: ${props => props.theme.spacing(6)};
`;

export const ButtonsBox = styled.div`
  display: flex;
`;
