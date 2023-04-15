import styled from "@emotion/styled";
import { ReactComponent as iconSelectPatient } from "shared/icons/selectPatient.svg";

export const Container = styled.div`
  width: 1808px;
  height: 228px;
`;

export const ModalBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.primary.default};
  fill: ${props => props.theme.colors.primary.default};

  border: 2px solid ${props => props.theme.colors.primary.default};
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
  border-radius: ${props => props.theme.borderRadius};
  width: 100%;
  height: 100%;
  background-color: transparent;

  :focus,
  :hover {
    color: ${props => props.theme.colors.primary.hover};
    fill: ${props => props.theme.colors.primary.hover};
    border-color: ${props => props.theme.colors.primary.hover};
  }

  :active {
    color: ${props => props.theme.colors.primary.pressed};
    fill: ${props => props.theme.colors.primary.pressed};
    border-color: ${props => props.theme.colors.primary.pressed};
  }
`;

export const IconSelectPatient = styled(iconSelectPatient)`
  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const ModalContainer = styled.div`
  width: 1392px;
  height: 752px;
`;
