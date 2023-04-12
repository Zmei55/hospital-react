import styled from "@emotion/styled";
import { ReactComponent as iconGear } from "shared/icons/gear.svg";

export const Icon = styled(iconGear)`
  fill: ${props => props.theme.colors.primary.default};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.primary.hover};
  }

  :active {
    fill: ${props => props.theme.colors.primary.pressed};
  }

  :disabled {
    fill: ${props => props.theme.colors.primary.disabled};
  }
`;
