import styled from "@emotion/styled";
import { ReactComponent as iconCross } from "shared/icons/cross.svg";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  /* width: 72px;
  height: 72px; */
  padding: 0;
  background-color: ${props => props.theme.colors.error.default};
  border-color: transparent;
  border-radius: ${props => props.theme.borderRadius};

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.error.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.error.pressed};
  }
`;

export const IconCross = styled(iconCross)`
  fill: ${props => props.theme.colors.white};
  width: 32px;
  height: 30px;
`;
