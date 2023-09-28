import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (min-width: 640px) and (max-width: 1279px) {
    width: 100%;
    margin-bottom: ${props => props.theme.spacing(12)};
  }

  @media screen and (min-width: 1280px) {
    width: 518px;
    margin-right: ${props => props.theme.spacing(16)};
  }

  @media screen and (min-width: 1600px) {
    width: 722px;
  }
`;
