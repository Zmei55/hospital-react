import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  position: relative;

  height: 440px;
  margin-bottom: ${props => props.theme.spacing(4)};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  border-color: transparent;
`;

export const LargeBtn = styled(Button)`
  width: 100%;
`;

export const MediumBtn = styled(Button)`
  width: 684px;
  margin-right: ${props => props.theme.spacing(4)};
`;

export const SmallBtn = styled(Button)`
  width: 450px;
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
