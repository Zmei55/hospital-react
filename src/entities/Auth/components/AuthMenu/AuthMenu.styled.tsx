import styled from "@emotion/styled";

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;

  border-radius: ${props => props.theme.borderRadius};
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);

  @media screen and (max-width: 959px) {
    width: 508px;
    height: 246px;

    padding-top: 28px;
    padding-bottom: 28px;
  }

  @media screen and (min-width: 960px) {
    width: 608px;
    height: 408px;
    padding-top: 28px;
    padding-bottom: 28px;
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
    width: 608px;
    height: 508px;
    padding-top: 46px;
    padding-bottom: 46px;
  }

  @media screen and (min-width: 1600px) {
    width: 608px;
    height: 608px;
    padding-top: 96px;
    padding-bottom: 96px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.125;

  @media screen and (max-width: 1279px) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${props => props.theme.spacing(4)};
  }
`;

export const SubTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.17;

  @media screen and (max-width: 959px) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }

  @media screen and (min-width: 960px) {
    margin-bottom: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${props => props.theme.spacing(10)};
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 959px) {
    margin-bottom: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 960px) {
    margin-bottom: ${props => props.theme.spacing(8)};
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${props => props.theme.spacing(16)};
  }
`;

export const Label = styled.label`
  :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(4)};
  }
`;

export const ErrorTitle = styled.p`
  font-weight: 500;
  text-align: center;

  margin-left: ${props => props.theme.spacing(6)};
  margin-right: ${props => props.theme.spacing(6)};

  margin-top: ${props => props.theme.spacing(14)};
  margin-bottom: ${props => props.theme.spacing(14)};
`;
