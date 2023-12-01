import styled from "@emotion/styled";

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;

  background-color: #f3f7fa;
  border: 1px solid black;
  border-radius: 30px;
  overflow: hidden;

  @media screen and (max-width: 1279px) {
    width: 100%;
    min-width: 508px;

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
