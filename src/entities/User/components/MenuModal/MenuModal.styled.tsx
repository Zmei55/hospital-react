import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  padding-top: ${props => props.theme.spacing(4)};
  padding-bottom: ${props => props.theme.spacing(4)};
  padding-right: ${props => props.theme.spacing(6)};
  padding-left: ${props => props.theme.spacing(6)};
  border-bottom: ${props => props.theme.border};
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.13;

  margin-right: auto;
`;

export const Body = styled.div`
  width: 100%;
  height: 648px;
  padding-right: ${props => props.theme.spacing(6)};
  padding-left: ${props => props.theme.spacing(6)};
`;

export const OptionalBlock = styled.div`
  display: flex;
  justify-content: end;

  width: 100%;
  padding-top: ${props => props.theme.spacing(4)};
  padding-bottom: ${props => props.theme.spacing(4)};

  border-bottom: ${props => props.theme.border};
`;

export const LangTitle = styled.h3`
  padding-right: ${props => props.theme.spacing(4)};
`;

export const LangSelect = styled.select`
  font-style: inherit;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.text.default};

  width: 150px;
  height: 36px;
  padding-right: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(2)};
  outline: none;
`;

export const LangOption = styled.option``;

export const UserBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: ${props => props.theme.spacing(4)};
`;

export const UserRow = styled.div`
  :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(2)};
  }
`;

export const Key = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: ${props => props.theme.colors.text.label};
`;

export const Value = styled.span`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.13;
  color: ${props => props.theme.colors.text.default};
`;
