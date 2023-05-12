import styled from "@emotion/styled";

//? Modal
export const ModalBody = styled.div`
  height: 786px;
  padding: ${props => props.theme.spacing(6)} ${props => props.theme.spacing(8)};
`;

export const ServiceForm = styled.form`
  display: flex;

  height: 100%;
`;

//? SelectedServices
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
