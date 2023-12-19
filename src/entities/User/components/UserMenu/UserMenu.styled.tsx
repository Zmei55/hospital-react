import styled from "@emotion/styled";
import {
  TextBigStyle,
  TextMediumStyle,
} from "shared/ui/Styles/TextStyles.styled";

export const Container = styled.div`
  display: flex;

  @media screen and (max-width: 639px) {
    justify-content: end;
    width: 100%;
  }
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;

  height: 72px;

  @media screen and (max-width: 1279px) {
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

  @media screen and (min-width: 1280px) {
    margin-right: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 1600px) {
    width: 431px;
    margin-right: ${props => props.theme.spacing(8)};
  }
`;

export const Name = styled(TextBigStyle)`
  @media screen and (min-width: 1280px) and (max-width: 1599px) {
    width: 320px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Workplace = styled(TextMediumStyle)`
  @media screen and (min-width: 1280px) and (max-width: 1599px) {
    width: 320px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
