import styled from "@emotion/styled";
import { TitleMediumStyle } from "shared/ui/Styles/TitleStyles.styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (max-width: 1279px) {
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    flex: 1;
  }
`;

export const Title = styled(TitleMediumStyle)`
  color: ${props => props.theme.colors.text.default};

  margin-bottom: ${props => props.theme.spacing(6)};

  @media screen and (min-width: 1280px) and (max-width: 1599px) {
    margin-bottom: ${props => props.theme.spacing(4)};
  }
`;

export const ModalBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  color: #115ffd;
  fill: #115ffd;

  border: 2px solid #115ffd;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
  border-radius: ${props => props.theme.borderRadius};
  background-color: transparent;
  outline: none;

  :focus,
  :hover {
    color: ${props => props.theme.colors.blue.hover};
    fill: ${props => props.theme.colors.blue.hover};
    border-color: ${props => props.theme.colors.blue.hover};
  }

  :active {
    color: ${props => props.theme.colors.blue.pressed};
    fill: ${props => props.theme.colors.blue.pressed};
    border-color: ${props => props.theme.colors.blue.pressed};
  }

  :disabled {
    color: ${props => props.theme.colors.text.placeholder};
    fill: ${props => props.theme.colors.text.placeholder};
    border-color: ${props => props.theme.colors.text.placeholder};
    cursor: not-allowed;
  }

  @media screen and (max-width: 1279px) {
    height: 228px;
  }

  @media screen and (min-width: 1280px) {
    height: 100%;
  }
`;

export const ButtonTitle = styled.span``;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding-top: ${props => props.theme.spacing(4)};
  padding-bottom: ${props => props.theme.spacing(4)};
  padding-right: ${props => props.theme.spacing(6)};
  padding-left: ${props => props.theme.spacing(6)};
  border-bottom: ${props => props.theme.border};
`;

export const ModalTitle = styled(TitleMediumStyle)``;

export const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 628px;
  padding-left: ${props => props.theme.spacing(4)};
  padding-right: ${props => props.theme.spacing(4)};

  @media screen and (max-width: 959px) {
    height: 236px;
  }

  @media screen and (min-width: 960px) {
    height: 336px;
  }
`;

export const ModalText = styled.span`
  font-weight: 500;
  text-align: center;
`;
