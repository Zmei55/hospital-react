import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: ${props => props.theme.spacing(6)};

  @media screen and (min-width: 1280px) and (max-width: 1599px) {
    margin-bottom: ${props => props.theme.spacing(4)};
  }
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.13;
  color: ${props => props.theme.colors.text.default};

  margin-right: auto;
`;
