import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1856px;
  height: 896px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  padding-top: ${props => props.theme.spacing(4)};
  padding-right: ${props => props.theme.spacing(6)};
  padding-bottom: ${props => props.theme.spacing(4)};
  padding-left: ${props => props.theme.spacing(6)};
  border-bottom: ${props => props.theme.border};
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.13;
  color: ${props => props.theme.colors.text.default};

  margin-right: auto;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;

  height: 790px;

  padding-top: ${props => props.theme.spacing(8)};
  padding-right: ${props => props.theme.spacing(6)};
  padding-bottom: ${props => props.theme.spacing(8)};
  padding-left: ${props => props.theme.spacing(6)};
`;

export const Text = styled.span`
  font-weight: 500;
  text-align: center;
`;
