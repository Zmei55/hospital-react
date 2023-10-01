import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  width: 100%;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding-top: ${props => props.theme.spacing(4)};
  padding-bottom: ${props => props.theme.spacing(4)};
  border-bottom: ${props => props.theme.border};

  @media screen and (max-width: 959px) {
    padding-right: ${props => props.theme.spacing(4)};
    padding-left: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 960px) {
    padding-right: ${props => props.theme.spacing(5)};
    padding-left: ${props => props.theme.spacing(5)};
  }

  @media screen and (min-width: 1600px) {
    padding-right: ${props => props.theme.spacing(6)};
    padding-left: ${props => props.theme.spacing(6)};
  }
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.13;

  margin-right: auto;

  @media screen and (max-width: 959px) {
    width: 80px;
  }

  @media screen and (min-width: 960px) and (max-width: 1279px) {
    width: 360px;
  }

  @media screen and (max-width: 1279px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Body = styled.div`
  width: 100%;

  @media screen and (max-width: 959px) {
    min-height: 248px;
    margin-top: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 960px) {
    min-height: 274px;
    margin-top: ${props => props.theme.spacing(6)};
  }

  @media screen and (max-width: 1279px) {
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
  }

  @media screen and (min-width: 1280px) {
    height: 418px;
    margin-top: ${props => props.theme.spacing(10)};
  }

  @media screen and (min-width: 1600px) {
    height: 588px;
  }

  @media screen and (min-width: 1920px) {
    height: 722px;
    margin-top: ${props => props.theme.spacing(16)};
  }
`;

export const Form = styled.form`
  display: flex;

  @media screen and (max-width: 959px) {
    gap: ${props => props.theme.spacing(1)};
  }

  @media screen and (min-width: 960px) {
    gap: ${props => props.theme.spacing(2)};
  }

  @media screen and (max-width: 1599px) {
    flex-wrap: wrap;
    padding-right: ${props => props.theme.spacing(4)};
    padding-left: ${props => props.theme.spacing(4)};
    margin-bottom: ${props => props.theme.spacing(6)};
  }

  @media screen and (min-width: 1600px) {
    padding-right: ${props => props.theme.spacing(6)};
    padding-left: ${props => props.theme.spacing(6)};
    margin-bottom: ${props => props.theme.spacing(12)};
  }

  @media screen and (min-width: 1920px) {
    margin-bottom: ${props => props.theme.spacing(18)};
  }
`;

export const Label = styled.label`
  @media screen and (max-width: 1279px) {
    :nth-of-type(4) {
      width: 100%;
    }
  }

  @media screen and (min-width: 1280px) and (max-width: 1599px) {
    :nth-of-type(4) {
      flex: 1;
    }
  }

  @media screen and (max-width: 1599px) {
    :nth-of-type(1) {
      width: 100%;
    }

    :nth-of-type(2),
    :nth-of-type(3) {
      flex: 1;
    }
  }

  @media screen and (min-width: 1600px) {
    :nth-of-type(1) {
      width: 632px;
    }

    :nth-of-type(2),
    :nth-of-type(3) {
      width: 230px;
    }

    :nth-of-type(4) {
      width: 240px;
    }
  }

  @media screen and (min-width: 1920px) {
    :nth-of-type(1) {
      width: 770px;
    }

    :nth-of-type(2),
    :nth-of-type(3) {
      width: 276px;
    }

    :nth-of-type(4) {
      width: 256px;
    }
  }
`;

export const List = styled.div`
  @media screen and (max-width: 959px) {
    position: relative;
  }
`;

export const ListHeader = styled.div`
  @media screen and (max-width: 959px) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  @media screen and (min-width: 960px) {
    display: flex;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
    color: ${props => props.theme.colors.text.label};

    width: 100%;
    padding-right: ${props => props.theme.spacing(4)};
    padding-left: ${props => props.theme.spacing(4)};
  }
`;

export const HeadName = styled.div`
  @media screen and (min-width: 960px) {
    flex: 3.8;
  }
`;

export const HeadCardNumber = styled.div`
  @media screen and (min-width: 960px) {
    flex: 1.4;
  }
`;

export const HeadRequestNumber = styled.div`
  @media screen and (min-width: 960px) {
    flex: 1.4;
  }
`;

export const HeadRequestDate = styled.div`
  @media screen and (min-width: 960px) {
    flex: 0.95;
  }
`;

export const HeadSelectBtn = styled.div`
  @media screen and (min-width: 1280px) {
    flex: 1.23;
  }
`;

export const ListBody = styled.ul`
  font-weight: 400;

  border-radius: ${props => props.theme.border};

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

  @media screen and (min-width: 1280px) {
    height: 218px;
  }

  @media screen and (min-width: 1600px) {
    height: 444px;
  }

  @media screen and (min-width: 1920px) {
    height: 554px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  width: 100%;
  padding-right: ${props => props.theme.spacing(4)};
  padding-left: ${props => props.theme.spacing(4)};

  :nth-of-type(2n - 1) {
    background-color: ${props => props.theme.colors.grey.default};
  }

  @media screen and (max-width: 1279px) {
    padding-top: ${props => props.theme.spacing(4)};
  }
`;

export const BodyName = styled.p`
  @media screen and (max-width: 959px) {
    text-align: center;

    width: 100%;
    padding-bottom: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 960px) {
    flex: 3.75;
  }
`;

export const BodyCardNumber = styled.p`
  @media screen and (max-width: 959px) {
    flex: 1;
    text-align: center;
  }

  @media screen and (min-width: 960px) {
    flex: 1.4;
  }
`;

export const BodyRequestNumber = styled.p`
  @media screen and (max-width: 959px) {
    flex: 1;
    text-align: center;
  }

  @media screen and (min-width: 960px) {
    flex: 1.4;
  }
`;

export const BodyRequestDate = styled.p`
  @media screen and (max-width: 959px) {
    flex: 1;
    text-align: center;
  }

  @media screen and (min-width: 960px) {
    flex: 0.9;
  }
`;

export const BodySelectBtn = styled.p`
  @media screen and (max-width: 959px) {
    text-align: center;
    width: 100%;
  }

  @media screen and (min-width: 960px) and (max-width: 1279px) {
    text-align: center;
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    flex: 1.17;
  }
`;

export const SelectBtn = styled.button`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.blue.default};
  text-decoration: none;

  width: 100%;
  padding: 22px 24px;
  background-color: transparent;
  border-color: transparent;

  :focus,
  :hover {
    color: ${props => props.theme.colors.blue.hover};
  }

  :active {
    color: ${props => props.theme.colors.blue.pressed};
  }
`;
