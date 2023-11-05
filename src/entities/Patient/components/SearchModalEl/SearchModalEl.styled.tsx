import styled from "@emotion/styled";

export const ModalContainer = styled.div``;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  border-bottom: ${props => props.theme.border};

  @media screen and (max-width: 959px) {
    padding-top: ${props => props.theme.spacing(4)};
    padding-bottom: ${props => props.theme.spacing(4)};
    padding-right: ${props => props.theme.spacing(4)};
    padding-left: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 960px) {
    padding-top: ${props => props.theme.spacing(4)};
    padding-bottom: ${props => props.theme.spacing(4)};
    padding-right: ${props => props.theme.spacing(5)};
    padding-left: ${props => props.theme.spacing(5)};
  }

  @media screen and (min-width: 1600px) {
    padding-top: ${props => props.theme.spacing(4)};
    padding-bottom: ${props => props.theme.spacing(4)};
    padding-right: ${props => props.theme.spacing(6)};
    padding-left: ${props => props.theme.spacing(6)};
  }
`;

export const ModalTitle = styled.h3`
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

export const ModalBody = styled.div`
  width: 100%;

  @media screen and (max-width: 959px) {
    min-height: calc(100vh - 146px);
    margin-top: ${props => props.theme.spacing(4)};

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

  @media screen and (min-width: 960px) and (max-width: 1599px) {
    min-height: calc(100vh - 184px);
    margin-top: ${props => props.theme.spacing(10)};
  }

  @media screen and (min-width: 1600px) {
    height: 648px;
    margin-top: ${props => props.theme.spacing(16)};
  }

  @media screen and (min-width: 1920px) {
    margin-top: ${props => props.theme.spacing(16)};
  }
`;

export const Form = styled.form`
  display: flex;

  @media screen and (max-width: 959px) {
    width: 594px;

    margin-right: ${props => props.theme.spacing(4)};
    margin-left: ${props => props.theme.spacing(4)};
    margin-bottom: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 960px) {
    width: 878px;

    margin-right: ${props => props.theme.spacing(5)};
    margin-left: ${props => props.theme.spacing(5)};
    margin-bottom: ${props => props.theme.spacing(10)};
  }

  @media screen and (max-width: 1599px) {
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1280px) {
    width: 1140px;
  }

  @media screen and (min-width: 1600px) {
    width: 1352px;

    margin-right: ${props => props.theme.spacing(6)};
    margin-left: ${props => props.theme.spacing(6)};
    margin-bottom: ${props => props.theme.spacing(16)};
  }
`;

export const Label = styled.label`
  display: block;

  @media screen and (max-width: 959px) {
    :nth-of-type(1) {
      width: 594px;
      margin-bottom: ${props => props.theme.spacing(4)};
    }
  }

  @media screen and (max-width: 1599px) {
    :nth-of-type(2) {
      flex: 1.05;
      margin-right: ${props => props.theme.spacing(4)};
    }

    :nth-of-type(3) {
      flex: 0.95;
    }
  }

  @media screen and (min-width: 960px) and (max-width: 1279px) {
    :nth-of-type(1) {
      width: 878px;
    }
  }

  @media screen and (min-width: 1280px) {
    :nth-of-type(1) {
      width: 1140px;
    }
  }

  @media screen and (min-width: 960px) and (max-width: 1599px) {
    :nth-of-type(1) {
      margin-bottom: ${props => props.theme.spacing(5)};
    }
  }

  @media screen and (min-width: 1600px) {
    :nth-of-type(1) {
      width: 650px;
      margin-right: ${props => props.theme.spacing(4)};
    }

    :nth-of-type(2) {
      width: 294px;
      margin-right: ${props => props.theme.spacing(4)};
    }

    :nth-of-type(3) {
      width: 206px;
    }
  }
`;

export const List = styled.div`
  @media screen and (max-width: 959px) {
    position: relative;

    width: 628px;
  }

  @media screen and (min-width: 960px) {
    width: 918px;
  }

  @media screen and (min-width: 1280px) {
    width: 1180px;
  }

  @media screen and (min-width: 1600px) {
    width: 1400px;
  }
`;

export const ListHeader = styled.ul`
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
    line-height: 1.33;
    color: ${props => props.theme.colors.text.label};
  }
`;

export const HeadName = styled.li`
  @media screen and (max-width: 959px) {
  }

  @media screen and (min-width: 960px) {
    flex-grow: 2.6;
    padding-left: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 1280px) {
    padding-left: ${props => props.theme.spacing(6)};
  }
`;

export const HeadBirthDay = styled.li`
  @media screen and (min-width: 960px) {
    flex-grow: 1.05;
  }
`;

export const HeadCardNumber = styled.li`
  @media screen and (min-width: 960px) {
    flex-grow: 0.95;
  }
`;

export const HeadSelectBtn = styled.li`
  @media screen and (min-width: 1280px) {
    width: 194px;
  }
`;

export const ListBody = styled.ul`
  font-weight: 400;

  border-radius: ${props => props.theme.border};

  @media screen and (max-width: 959px) {
    height: calc(100vh - 316px);
  }

  @media screen and (min-width: 960px) {
    height: calc(100vh - 400px);

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

  @media screen and (min-width: 1600px) {
    height: 488px;
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
    flex: 2.75;
  }
`;

export const BodyBirthDay = styled.p`
  @media screen and (max-width: 959px) {
    flex: 1.1;
    text-align: center;
  }

  @media screen and (min-width: 960px) {
    flex: 1.1;
  }
`;

export const BodyCardNumber = styled.p`
  @media screen and (max-width: 959px) {
    flex: 0.9;
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
    width: 194px;
  }
`;

export const SelectBtn = styled.button`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.blue.default};

  width: 194px;
  height: ${props => props.theme.spacing(18)};
  padding: 22px 24px;
  text-decoration: none;
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
