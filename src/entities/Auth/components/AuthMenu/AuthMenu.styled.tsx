import styled from "@emotion/styled";
import { InputEl } from "shared";

export const Section = styled.section`
  padding-top: 135px;
  padding-bottom: 155px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.125;

  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const SubTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.17;

  margin-bottom: ${props => props.theme.spacing(10)};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 608px;
  height: 608px;
  padding-top: 96px;
  padding-bottom: 96px;
  margin-right: auto;
  margin-left: auto;

  border-radius: ${props => props.theme.borderRadius};
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: ${props => props.theme.spacing(16)};
`;

export const Label = styled.label`
  :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(4)};
  }
`;

export const Input = styled(InputEl)`
  font-size: 24px;
  line-height: 1.17;

  width: 368px;
  height: 72px;
`;

export const ErrorTitle = styled.p`
  font-weight: 500;
  text-align: center;

  padding-left: ${props => props.theme.spacing(4)};
  padding-right: ${props => props.theme.spacing(4)};

  margin-bottom: ${props => props.theme.spacing(10)};
`;
