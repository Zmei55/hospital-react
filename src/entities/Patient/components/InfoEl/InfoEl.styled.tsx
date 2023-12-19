import styled from "@emotion/styled";
import { TitleMediumStyle } from "shared/ui/Styles/TitleStyles.styled";

export const NameBlock = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 959px) {
    margin-bottom: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 960px) {
    margin-bottom: ${props => props.theme.spacing(5)};
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${props => props.theme.spacing(6)};
  }

  @media screen and (min-width: 1600px) {
    margin-bottom: ${props => props.theme.spacing(7)};
  }

  @media screen and (min-width: 1920px) {
    margin-bottom: ${props => props.theme.spacing(8)};
  }
`;

export const Name = styled(TitleMediumStyle)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text.default};
  margin-right: ${props => props.theme.spacing(6)};
`;

export const BasicInformationBox = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const BackgroundInformationBox = styled.div`
  @media screen and (max-width: 959px) {
    margin-top: ${props => props.theme.spacing(3)};
  }

  @media screen and (min-width: 960px) {
    margin-top: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    margin-top: ${props => props.theme.spacing(5)};
  }

  @media screen and (min-width: 1600px) {
    margin-top: ${props => props.theme.spacing(6)};
  }
`;

export const InfoBox = styled.div`
  @media screen and (max-width: 1279px) {
    display: flex;
    align-items: center;

    :not(:last-of-type) {
      margin-bottom: ${props => props.theme.spacing(2)};
    }
  }
`;

export const InfoHeader = styled.h4`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: ${props => props.theme.colors.text.label};

  @media screen and (max-width: 1279px) {
    width: 200px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }
`;

export const InfoBody = styled.span`
  line-height: 1.17;
  color: ${props => props.theme.colors.text.default};

  @media screen and (max-width: 959px) {
    max-width: 374px;
  }

  @media screen and (min-width: 960px) and (max-width: 1279px) {
    max-width: 676px;
  }
`;
