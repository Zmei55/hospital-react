import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  padding-top: ${props => props.theme.spacing(4)};
  padding-right: ${props => props.theme.spacing(6)};
  padding-bottom: ${props => props.theme.spacing(4)};
  padding-left: ${props => props.theme.spacing(6)};
  border-bottom: ${props => props.theme.border};
`;

export const RequestNumber = styled.span`
  color: ${props => props.theme.colors.blue.default};
`;

export const HeaderTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.13;
  color: ${props => props.theme.colors.text.default};

  margin-right: auto;
`;
