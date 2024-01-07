import styled from "@emotion/styled";
import { TitleSmallStyle } from "shared/ui/Styles/TitleStyles.styled";

export const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};

  @media screen and (max-width: 1279px) {
    height: calc(100vh - 122px);
    padding: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 1280px) and (max-width: 1599px) {
    height: 578px;
    padding: ${props => props.theme.spacing(3)};
  }

  @media screen and (min-width: 1600px) {
    height: 732px;
    padding-top: ${props => props.theme.spacing(7)};
    padding-right: ${props => props.theme.spacing(6)};
    padding-bottom: ${props => props.theme.spacing(7)};
    padding-left: ${props => props.theme.spacing(6)};
  }

  @media screen and (min-width: 1920px) {
    height: 894px;
    padding-top: ${props => props.theme.spacing(8)};
    padding-right: ${props => props.theme.spacing(6)};
    padding-bottom: ${props => props.theme.spacing(8)};
    padding-left: ${props => props.theme.spacing(6)};
  }
`;

export const Title = styled(TitleSmallStyle)``;
