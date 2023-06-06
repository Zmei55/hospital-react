import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 104px;
  padding-right: ${props => props.theme.spacing(6)};
  padding-left: ${props => props.theme.spacing(6)};

  border-bottom: 2px solid #e6e6e6;
`;

export const HeaderTitle = styled.h3``;

export const Form = styled.form`
  width: 100%;
  height: 608px;
  padding-top: ${props => props.theme.spacing(8)};
  padding-bottom: ${props => props.theme.spacing(8)};
`;

export const ButtonsBox = styled.div`
  display: flex;

  margin-right: ${props => props.theme.spacing(6)};
  margin-left: 707px;
`;
