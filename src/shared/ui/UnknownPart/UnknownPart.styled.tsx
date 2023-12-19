import styled from "@emotion/styled";
import { TitleMediumStyle } from "shared/ui/Styles/TitleStyles.styled";

export const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: ${props => props.theme.spacing(4)};
  padding-right: ${props => props.theme.spacing(6)};
  padding-bottom: ${props => props.theme.spacing(4)};
  padding-left: ${props => props.theme.spacing(6)};
  border-bottom: ${props => props.theme.border};
`;

export const Title = styled(TitleMediumStyle)`
  color: ${props => props.theme.colors.text.default};
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: ${props => props.theme.spacing(4)};
  padding-right: ${props => props.theme.spacing(4)};

  @media screen and (max-width: 959px) {
    height: 136px;
  }

  @media screen and (min-width: 960px) {
    height: 300px;
  }

  @media screen and (min-width: 1280px) {
    height: 468px;
  }

  @media screen and (min-width: 1600px) {
    height: 628px;
  }

  @media screen and (min-width: 1920px) {
    height: 788px;
  }
`;

export const Text = styled.span`
  font-weight: 500;
  text-align: center;
`;
