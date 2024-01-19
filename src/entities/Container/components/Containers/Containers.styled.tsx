import styled from "@emotion/styled";
import { TitleMediumStyle } from "shared/ui/Styles/TitleStyles.styled";
import { TextSmallStyle } from "shared/ui/Styles/TextStyles.styled";

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

export const ModalText = styled(TextSmallStyle)`
  text-align: center;
`;
