import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  background-color: ${props => props.theme.colors.white};

  @media screen and (max-width: 1279px) {
    height: 80px;
    position: relative;

    padding-right: ${props => props.theme.spacing(4)};
    padding-left: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 1280px) {
    height: 100px;
    padding-right: ${props => props.theme.spacing(6)};
    padding-left: ${props => props.theme.spacing(6)};
  }

  @media screen and (min-width: 1600px) {
    height: 110px;
    padding-right: ${props => props.theme.spacing(7)};
    padding-left: ${props => props.theme.spacing(7)};
  }

  @media screen and (min-width: 1920px) {
    height: 120px;
    padding-right: ${props => props.theme.spacing(8)};
    padding-left: ${props => props.theme.spacing(8)};
  }
`;

export const Body = styled.main`
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 1280px) {
    height: calc(100% - 100px);
  }

  @media screen and (max-width: 1599px) {
    padding: ${props => props.theme.spacing(5)};
  }

  @media screen and (min-width: 1600px) {
    height: calc(100% - 110px);
    padding: ${props => props.theme.spacing(7)};
  }

  @media screen and (min-width: 1920px) {
    height: calc(100% - 120px);
    padding: ${props => props.theme.spacing(8)};
  }
`;
