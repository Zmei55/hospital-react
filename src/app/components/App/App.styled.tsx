import styled from "@emotion/styled";

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;

  background-color: #f3f7fa;
  border: 1px solid black;
  border-radius: 30px;
  overflow: hidden;

  @media screen and (max-width: 959px) {
    width: 640px;
    height: 360px;
  }
  @media screen and (min-width: 960px) {
    width: 960px;
    height: 540px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    height: 720px;
  }
  @media screen and (min-width: 1600px) {
    width: 1600px;
    height: 900px;
  }
  @media screen and (min-width: 1920px) {
    width: 1920px;
    height: 1080px;
  }
`;
