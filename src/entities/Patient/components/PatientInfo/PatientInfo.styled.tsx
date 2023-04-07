import styled from "@emotion/styled";
import { ReactComponent as iconInfoActive } from "shared/icons/caretDoubleDown.svg";
import { ReactComponent as iconInfoInactive } from "shared/icons/caretDoubleUp.svg";

export const NameBlock = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: ${props => props.theme.spacing(8)};
`;

export const InfoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  margin-right: ${props => props.theme.spacing(4)};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  background-color: transparent;
`;

export const IconInfoActive = styled(iconInfoActive)`
  fill: ${props => props.theme.colors.text.body};
`;

export const IconInfoInactive = styled(iconInfoInactive)`
  fill: ${props => props.theme.colors.text.body};
`;

export const PatientName = styled.h3`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.13;
  color: ${props => props.theme.colors.text.default};
`;

export const PatientClearBtn = styled.button`
  width: 24px;
  height: 24px;
`;

export const BasicInformationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BackgroundInformationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin-top: ${props => props.theme.spacing(6)};
`;

export const InfoBox = styled.div``;

export const InfoHeader = styled.h4`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: ${props => props.theme.colors.text.label};

  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const InfoBody = styled.span`
  line-height: 1.17;
  color: ${props => props.theme.colors.text.default};
`;
