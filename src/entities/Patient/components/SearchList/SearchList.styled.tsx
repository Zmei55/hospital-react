import styled from "@emotion/styled";

export const List = styled.div``;

export const ListHeader = styled.ul`
  display: flex;
  font-size: 18px;
  line-height: 1.33;
  color: ${props => props.theme.colors.text.label};
`;

export const HeadName = styled.li`
  text-align: start;

  padding-left: ${props => props.theme.spacing(6)};
  width: 674px;
`;

export const HeadBirthDay = styled.li`
  text-align: center;
  width: 301px;
`;

export const HeadCardNumber = styled.li`
  text-align: center;
  width: 223px;
`;

export const HeadSelectBtn = styled.li`
  width: 194px;
`;

export const ListBody = styled.ul`
  font-weight: 400;

  height: 415px;
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
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  :nth-of-type(2n - 1) {
    background-color: ${props => props.theme.colors.grey.default};
  }
`;

export const BodyName = styled.p`
  width: 674px;
  padding-left: ${props => props.theme.spacing(6)};
`;

export const BodyBirthDay = styled.p`
  text-align: center;
  width: 301px;
`;

export const BodyCardNumber = styled.p`
  text-align: center;
  width: 223px;
`;

export const BodySelectBtn = styled.p`
  width: 194px;
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
