import styled from '@emotion/styled';
import { ReactComponent as iconSelectPatient } from 'icons/selectPatient.svg';
import { ReactComponent as iconCross } from 'icons/cross.svg';

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

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: ${props => props.theme.spacing(4)};
  padding-bottom: ${props => props.theme.spacing(4)};
  padding-right: ${props => props.theme.spacing(6)};
  padding-left: ${props => props.theme.spacing(6)};
  border-bottom: ${props => props.theme.border};
`;

export const ModalTitle = styled.h3`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.13;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ResetBtn = styled.button`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;

  width: 205px;
  height: 72px;
  margin-right: ${props => props.theme.spacing(6)};
  background-color: transparent;
  border: 2px solid #dce0f5;
  border-radius: ${props => props.theme.borderRadius};

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.secondary.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.secondary.pressed};
  }
`;

export const FindBtn = styled.button`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  color: #fff;

  width: 162px;
  height: 72px;
  margin-right: ${props => props.theme.spacing(6)};
  background-color: ${props => props.theme.colors.primary.default};
  border-color: transparent;
  border-radius: ${props => props.theme.borderRadius};

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.primary.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.primary.pressed};
  }
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 72px;
  height: 72px;
  padding: 0;
  background-color: ${props => props.theme.colors.error.default};
  border-color: transparent;
  border-radius: ${props => props.theme.borderRadius};

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.error.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.error.pressed};
  }
`;

export const IconCross = styled(iconCross)`
  fill: ${props => props.theme.colors.white};
  width: 32px;
  height: 30px;
`;

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
    border-color: ${props => props.theme.colors.primary.hover};
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
    border-color: ${props => props.theme.colors.primary.hover};
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
    border-color: ${props => props.theme.colors.primary.hover};
  }

  ::placeholder {
    font-weight: 400;
    font-size: 24px;
    line-height: 1.17;
    color: ${props => props.theme.colors.text.placeholder};
  }
`;

export const PatientsList = styled.div``;

export const ListHeader = styled.ul`
  display: flex;
  font-size: 18px;
  line-height: 1.33;
  color: ${props => props.theme.colors.text.label};
`;

export const HeadName = styled.li`
  text-align: start;

  padding-left: ${props => props.theme.spacing(6)};
  width: 674px;
`;

export const HeadBirthDay = styled.li`
  text-align: center;
  width: 301px;
`;

export const HeadCardNumber = styled.li`
  text-align: center;
  width: 223px;
`;

export const HeadSelectBtn = styled.li`
  width: 194px;
`;

export const ListBody = styled.ul`
  font-weight: 400;

  height: 415px;
  border-radius: ${props => props.theme.border};

  overflow: auto;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: ${props => props.theme.spacing(2)};
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    height: 100px;
    border-radius: 25px;
    background-color: ${props => props.theme.colors.secondary.default};

    :active {
      background-color: ${props => props.theme.colors.secondary.pressed};
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  :nth-of-type(2n - 1) {
    background-color: ${props => props.theme.colors.secondary.default};
  }
`;

export const BodyName = styled.p`
  width: 674px;
  padding-left: ${props => props.theme.spacing(6)};
`;

export const BodyBirthDay = styled.p`
  text-align: center;
  width: 301px;
`;

export const BodyCardNumber = styled.p`
  text-align: center;
  width: 223px;
`;

export const BodySelectBtn = styled.p`
  width: 194px;
`;

export const SelectBtn = styled.button`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.primary.default};

  width: 194px;
  height: ${props => props.theme.spacing(18)};
  padding: 22px 24px;
  text-decoration: none;
  background-color: transparent;
  border-color: transparent;

  :focus,
  :hover {
    color: ${props => props.theme.colors.primary.hover};
  }

  :active {
    color: ${props => props.theme.colors.primary.pressed};
  }
`;
