import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  gap: ${props => props.theme.spacing(4)};
`;
