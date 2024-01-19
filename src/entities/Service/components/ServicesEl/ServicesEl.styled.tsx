import styled from "@emotion/styled";
import { TitleMediumStyle } from "shared/ui/Styles/TitleStyles.styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (min-width: 640px) and (max-width: 1279px) {
    width: 100%;
    margin-bottom: ${props => props.theme.spacing(12)};
  }

  @media screen and (min-width: 1280px) {
    width: 518px;
    margin-right: ${props => props.theme.spacing(16)};
  }

  @media screen and (min-width: 1600px) {
    width: 722px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: ${props => props.theme.spacing(6)};

  @media screen and (min-width: 1280px) and (max-width: 1599px) {
    margin-bottom: ${props => props.theme.spacing(4)};
  }
`;

export const Title = styled(TitleMediumStyle)`
  color: ${props => props.theme.colors.text.default};

  margin-right: auto;
`;

export const ButtonsBox = styled.div`
  display: flex;
`;

export const List = styled.ul`
  overflow: auto;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: ${props => props.theme.spacing(2)};
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    height: 100px;
    border-radius: 25px;
    background-color: ${props => props.theme.colors.grey.default};

    :active {
      background-color: ${props => props.theme.colors.grey.pressed};
    }
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  padding: ${props => props.theme.spacing(2)} 0;
`;

export const ServiceNameBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const ServiceNameHeader = styled.div`
  display: flex;

  margin-right: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(1)};
`;

const SecondaryText = styled.span`
  font-size: 20px;
  line-height: 1.2;
  color: ${props => props.theme.colors.text.placeholder};
`;

export const Code = styled(SecondaryText)``;

export const LaborName = styled(SecondaryText)`
  margin-left: auto;
`;

export const ServiceName = styled.span`
  color: ${props => props.theme.colors.text.default};
`;
