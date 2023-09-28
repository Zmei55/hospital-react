import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Button = styled.button`
  position: relative;

  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  border-color: transparent;

  @media screen and (max-width: 1279px) {
    height: 200px;
  }

  @media screen and (min-width: 1280px) {
    height: 284px;
  }

  @media screen and (min-width: 1600px) {
    height: 358px;
  }

  @media screen and (min-width: 1920px) {
    height: 440px;
  }
`;

export const LargeBtn = styled(Button)`
  width: 100%;
  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const MediumBtn = styled(Button)`
  @media screen and (max-width: 959px) {
    width: 100%;
    margin-bottom: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 960px) {
    flex-grow: 4;
    margin-right: ${props => props.theme.spacing(2)};
  }

  @media screen and (min-width: 1280px) {
    margin-right: ${props => props.theme.spacing(4)};
  }
`;

export const SmallBtn = styled(Button)`
  @media screen and (max-width: 959px) {
    width: 100%;
  }

  @media screen and (min-width: 960px) {
    flex-grow: 3;
  }
`;

export const IconContainer = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 959px) {
    bottom: ${props => props.theme.spacing(2)};
    left: ${props => props.theme.spacing(2)};
  }

  @media screen and (min-width: 960px) {
    bottom: ${props => props.theme.spacing(3)};
    left: ${props => props.theme.spacing(3)};
  }

  @media screen and (min-width: 1280px) {
    bottom: ${props => props.theme.spacing(5)};
    left: ${props => props.theme.spacing(5)};
  }

  @media screen and (min-width: 1600px) {
    bottom: ${props => props.theme.spacing(7)};
    left: ${props => props.theme.spacing(7)};
  }

  @media screen and (min-width: 1920px) {
    bottom: ${props => props.theme.spacing(8)};
    left: ${props => props.theme.spacing(8)};
  }
`;

export const IconTitle = styled.span`
  font-weight: 600;
  color: ${props => props.theme.colors.text.default};

  @media screen and (max-width: 1279px) {
    font-size: 24px;
    line-height: 1.17;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
    line-height: 1.13;
  }
`;
