import styled from "@emotion/styled";
import { TitleMediumStyle } from "shared/ui/Styles/TitleStyles.styled";

export const Container = styled.div`
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
