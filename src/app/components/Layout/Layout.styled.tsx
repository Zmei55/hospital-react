import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  background-color: #fff;

  @media screen and (max-width: 959px) {
    height: 80px;
    position: relative;

    padding-right: ${props => props.theme.spacing(4)};
    padding-left: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 960px) {
    height: 90px;
    padding-right: ${props => props.theme.spacing(5)};
    padding-left: ${props => props.theme.spacing(5)};
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
  width: 100%;

  @media screen and (max-width: 959px) {
    height: calc(100% - 80px);
    padding: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 960px) {
    height: calc(100% - 90px);
    padding: ${props => props.theme.spacing(5)};
  }

  @media screen and (max-width: 1279px) {
    overflow: auto;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      width: ${props => props.theme.spacing(2)};
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 25px;
      background-color: ${props => props.theme.colors.grey.default};

      :active {
        background-color: ${props => props.theme.colors.grey.pressed};
      }
    }
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;

    height: calc(100% - 100px);
    padding: ${props => props.theme.spacing(6)};
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
