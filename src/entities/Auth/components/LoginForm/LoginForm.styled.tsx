import styled from "@emotion/styled";

export const SubTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.17;

  margin-bottom: ${props => props.theme.spacing(10)};
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
