import styled from "@emotion/styled";

export const HeaderTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 1px;

  @media screen and (max-width: 639px) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  @media screen and (min-width: 640px) and (max-width: 959px) {
    width: 290px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
