import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1856px;
  height: 896px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  height: 790px;

  padding-top: ${props => props.theme.spacing(8)};
  padding-right: ${props => props.theme.spacing(6)};
  padding-bottom: ${props => props.theme.spacing(8)};
  padding-left: ${props => props.theme.spacing(6)};
`;

export const Box = styled.div`
  flex: 1;
  display: flex;

  overflow: auto;
`;
