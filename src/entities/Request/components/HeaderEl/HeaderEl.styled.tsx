import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  align-items: center;

  border-bottom: ${props => props.theme.border};

  @media screen and (max-width: 1599px) {
    padding-top: ${props => props.theme.spacing(3)};
    padding-right: ${props => props.theme.spacing(3)};
    padding-bottom: ${props => props.theme.spacing(3)};
    padding-left: ${props => props.theme.spacing(3)};
  }

  @media screen and (min-width: 1600px) {
    padding-top: ${props => props.theme.spacing(5)};
    padding-right: ${props => props.theme.spacing(5)};
    padding-bottom: ${props => props.theme.spacing(5)};
    padding-left: ${props => props.theme.spacing(5)};
  }
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
