import styled from "@emotion/styled";

export const NameBlock = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: ${props => props.theme.spacing(8)};
`;

export const Name = styled.h3`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.13;
  color: ${props => props.theme.colors.text.default};
  margin-right: ${props => props.theme.spacing(6)};
`;
