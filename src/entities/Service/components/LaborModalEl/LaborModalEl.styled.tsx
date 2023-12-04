import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  border-bottom: 2px solid #e6e6e6;

  @media screen and (max-width: 959px) {
    padding-top: ${props => props.theme.spacing(3)};
    padding-right: ${props => props.theme.spacing(3)};
    padding-bottom: ${props => props.theme.spacing(3)};
    padding-left: ${props => props.theme.spacing(3)};
  }

  @media screen and (min-width: 960px) {
    padding-top: ${props => props.theme.spacing(4)};
    padding-right: ${props => props.theme.spacing(4)};
    padding-bottom: ${props => props.theme.spacing(4)};
    padding-left: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 1600px) {
    padding-top: ${props => props.theme.spacing(6)};
    padding-right: ${props => props.theme.spacing(6)};
    padding-bottom: ${props => props.theme.spacing(6)};
    padding-left: ${props => props.theme.spacing(6)};
  }
`;

export const HeaderTitle = styled.h3``;

export const Form = styled.form`
  width: 100%;
`;

export const Table = styled.div`
  width: 100%;
  margin-bottom: ${props => props.theme.spacing(6)};
`;

export const THead = styled.div`
  display: flex;

  font-size: 18px;
  line-height: 1.33;
  color: ${props => props.theme.colors.text.label};
`;

const TH = styled.div`
  padding-top: ${props => props.theme.spacing(4)};
  padding-bottom: ${props => props.theme.spacing(4)};
`;

export const THService = styled(TH)`
  flex-grow: 1;
  text-align: start;

  padding-right: ${props => props.theme.spacing(6)};
  padding-left: ${props => props.theme.spacing(6)};
`;

export const THLabor = styled(TH)`
  display: flex;
  justify-content: center;

  width: 134px;
`;

export const TBody = styled.ul`
  width: 100%;

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

  @media screen and (max-width: 959px) {
    max-height: calc(100vh - 286px);
    min-height: 120px;
    margin-bottom: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 960px) {
    max-height: calc(100vh - 306px);
    min-height: 120px;
    margin-bottom: ${props => props.theme.spacing(5)};
  }

  @media screen and (min-width: 1280px) {
    max-height: calc(100vh - 302px);
    margin-bottom: ${props => props.theme.spacing(6)};
  }

  @media screen and (min-width: 1600px) {
    height: 390px;
    margin-bottom: ${props => props.theme.spacing(7)};
  }

  @media screen and (min-width: 1920px) {
    margin-bottom: ${props => props.theme.spacing(8)};
  }
`;

export const TRBody = styled.li`
  display: flex;

  :nth-of-type(2n - 1) {
    background-color: ${props => props.theme.colors.grey.default};
  }
`;

export const ServiceBox = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 959px) {
    width: 218px;

    padding-top: ${props => props.theme.spacing(3)};
    padding-right: ${props => props.theme.spacing(3)};
    padding-bottom: ${props => props.theme.spacing(3)};
    padding-left: ${props => props.theme.spacing(3)};
  }

  @media screen and (min-width: 960px) {
    width: 348px;

    padding-top: ${props => props.theme.spacing(4)};
    padding-right: ${props => props.theme.spacing(4)};
    padding-bottom: ${props => props.theme.spacing(4)};
    padding-left: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 1280px) {
    width: 548px;

    padding-top: ${props => props.theme.spacing(4)};
    padding-right: ${props => props.theme.spacing(4)};
    padding-bottom: ${props => props.theme.spacing(4)};
    padding-left: ${props => props.theme.spacing(4)};
  }
`;

export const ServiceCode = styled.span`
  font-size: 20px;
  line-height: 1.2;
  color: ${props => props.theme.colors.text.placeholder};

  margin-bottom: ${props => props.theme.spacing(1)};
`;

export const ServiceName = styled.span`
  color: ${props => props.theme.colors.text.default};
`;

export const Radio = styled.div`
  width: 134px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
`;
