import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LargeBtn = styled.button`
  position: relative;

  width: 1852px;
  height: 440px;
  margin-bottom: ${props => props.theme.spacing(4)};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  border-color: transparent;
`;

export const MediumBtn = styled.button`
  position: relative;

  flex-basis: 684px;
  height: 440px;
  margin-right: ${props => props.theme.spacing(4)};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  border-color: transparent;
`;

export const SmallBtn = styled.button`
  position: relative;

  flex-basis: 450px;
  height: 440px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  border-color: transparent;
`;

export const IconContainer = styled.div`
  position: absolute;
  bottom: ${props => props.theme.spacing(8)};
  left: ${props => props.theme.spacing(8)};

  display: flex;
  flex-direction: column;
`;

export const IconTitle = styled.span`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.13;
  color: ${props => props.theme.colors.text.default};
`;
