import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1279px) {
    padding-top: ${props => props.theme.spacing(4)};
    padding-right: ${props => props.theme.spacing(4)};
    padding-bottom: ${props => props.theme.spacing(4)};
    padding-left: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 1280px) and (max-width: 1599px) {
    height: 472px;
    padding-top: ${props => props.theme.spacing(3)};
    padding-right: ${props => props.theme.spacing(3)};
    padding-bottom: ${props => props.theme.spacing(3)};
    padding-left: ${props => props.theme.spacing(3)};
  }

  @media screen and (min-width: 1600px) {
    height: 610px;
    padding-top: ${props => props.theme.spacing(7)};
    padding-right: ${props => props.theme.spacing(6)};
    padding-bottom: ${props => props.theme.spacing(7)};
    padding-left: ${props => props.theme.spacing(6)};
  }

  @media screen and (min-width: 1920px) {
    height: 790px;
    padding-top: ${props => props.theme.spacing(8)};
    padding-right: ${props => props.theme.spacing(6)};
    padding-bottom: ${props => props.theme.spacing(8)};
    padding-left: ${props => props.theme.spacing(6)};
  }
`;

export const Box = styled.div`
  display: flex;

  overflow: auto;

  @media screen and (max-width: 1279px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1280px) {
    flex-grow: 1;
  }
`;
