import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 120px;
  padding-right: ${props => props.theme.spacing(8)};
  padding-left: ${props => props.theme.spacing(8)};

  background-color: #fff;
`;

export const Body = styled.section`
  width: 100%;
  height: 960px;
  padding: ${props => props.theme.spacing(8)};
`;
