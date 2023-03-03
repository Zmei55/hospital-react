import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${props => props.theme.spacing(42)};
  padding-bottom: ${props => props.theme.spacing(46)};
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

export const Title = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.125;

  margin-bottom: ${props => props.theme.spacing(4)};
`;
