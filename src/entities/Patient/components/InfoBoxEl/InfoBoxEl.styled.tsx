import styled from "@emotion/styled";

export const BasicInformationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BackgroundInformationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin-top: ${props => props.theme.spacing(6)};
`;

export const Box = styled.div``;

export const Header = styled.h4`
  color: ${props => props.theme.colors.text.label};

  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const Body = styled.span`
  font-size: 28px;
  line-height: 1.14;
  color: ${props => props.theme.colors.text.default};
`;
