import styled from "@emotion/styled";

export const Container = styled.div`
  @media screen and (max-width: 959px) {
    margin-bottom: ${props => props.theme.spacing(8)};
  }

  @media screen and (min-width: 960px) {
    margin-bottom: ${props => props.theme.spacing(8)};
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 1600px) {
    margin-bottom: ${props => props.theme.spacing(10)};
  }

  @media screen and (min-width: 1920px) {
    margin-bottom: ${props => props.theme.spacing(12)};
  }
`;
