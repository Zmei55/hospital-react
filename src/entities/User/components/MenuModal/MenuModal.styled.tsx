import styled from "@emotion/styled";
import { TitleMediumStyle } from "shared/ui/Styles/TitleStyles.styled";
import { TextNormalStyle } from "shared/ui/Styles/TextStyles.styled";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  border-bottom: ${props => props.theme.border};

  @media screen and (max-width: 959px) {
    padding-top: ${props => props.theme.spacing(3)};
    padding-bottom: ${props => props.theme.spacing(3)};
    padding-right: ${props => props.theme.spacing(3)};
    padding-left: ${props => props.theme.spacing(3)};
  }

  @media screen and (min-width: 960px) {
    padding-top: ${props => props.theme.spacing(4)};
    padding-bottom: ${props => props.theme.spacing(4)};
    padding-right: ${props => props.theme.spacing(4)};
    padding-left: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 1600px) {
    padding-right: ${props => props.theme.spacing(5)};
    padding-left: ${props => props.theme.spacing(5)};
  }

  @media screen and (min-width: 1920px) {
    padding-right: ${props => props.theme.spacing(6)};
    padding-left: ${props => props.theme.spacing(6)};
  }
`;

export const Title = styled(TitleMediumStyle)`
  margin-right: auto;
`;

export const Body = styled.div`
  margin-bottom: ${props => props.theme.spacing(12)};

  @media screen and (max-width: 959px) {
    width: 628px;
    padding-right: ${props => props.theme.spacing(3)};
    padding-left: ${props => props.theme.spacing(3)};
  }

  @media screen and (min-width: 960px) {
    width: 828px;
    padding-right: ${props => props.theme.spacing(4)};
    padding-left: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 1600px) {
    width: 828px;
    height: 528px;
    padding-right: ${props => props.theme.spacing(5)};
    padding-left: ${props => props.theme.spacing(5)};
  }

  @media screen and (min-width: 1920px) {
    height: 648px;
    padding-right: ${props => props.theme.spacing(6)};
    padding-left: ${props => props.theme.spacing(6)};
  }
`;

export const OptionalBlock = styled.div`
  display: flex;
  justify-content: end;

  width: 100%;
  padding-top: ${props => props.theme.spacing(4)};
  padding-bottom: ${props => props.theme.spacing(4)};

  border-bottom: ${props => props.theme.border};
`;

export const LangTitle = styled.h3`
  padding-right: ${props => props.theme.spacing(4)};
`;

export const LangSelect = styled.select`
  font-style: inherit;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.text.default};

  width: 150px;
  height: 36px;
  padding-right: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(2)};
  border: 1px solid #000000;
  outline: none;
`;

export const LangOption = styled.option``;

export const UserBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: ${props => props.theme.spacing(4)};
`;

export const UserRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(5)};
  }
`;

export const Key = styled(TextNormalStyle)`
  color: ${props => props.theme.colors.text.label};
`;

export const Value = styled(TitleMediumStyle)`
  color: ${props => props.theme.colors.text.default};
`;
