import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
`;

export const UserBox = styled.div`
  width: 431px;
  height: 72px;
  margin-right: ${props => props.theme.spacing(18)};
`;

export const Name = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.17;
`;

export const Station = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
`;
