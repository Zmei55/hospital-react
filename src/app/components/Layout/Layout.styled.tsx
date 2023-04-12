import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: ${props => props.theme.spacing(6)};
  padding-right: ${props => props.theme.spacing(8)};
  padding-bottom: ${props => props.theme.spacing(6)};
  padding-left: ${props => props.theme.spacing(8)};

  background-color: #fff;
`;

export const Container = styled.div`
  display: flex;
`;

export const Body = styled.section`
  padding: ${props => props.theme.spacing(8)};
`;
