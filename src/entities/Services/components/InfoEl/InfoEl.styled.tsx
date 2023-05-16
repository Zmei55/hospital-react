import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.13;
  color: ${props => props.theme.colors.text.default};
`;

export const BtnBox = styled.div``;

export const HeaderBtn = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${props => props.theme.colors.text.body};

  padding-top: ${props => props.theme.spacing(3)};
  padding-right: ${props => props.theme.spacing(6)};
  padding-bottom: ${props => props.theme.spacing(3)};
  padding-left: ${props => props.theme.spacing(6)};

  background-color: ${props => props.theme.colors.grey.default};
  border: none;
  border-radius: ${props => props.theme.borderRadius};

  :not(:last-child) {
    margin-right: ${props => props.theme.spacing(6)};
  }
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
