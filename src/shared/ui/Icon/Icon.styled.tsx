import styled from "@emotion/styled";

export const InheritSVG = styled("svg")`
  fill: inherit;
`;

export const WhiteSVG = styled("svg")`
  fill: ${props => props.theme.colors.white};
`;

export const BlueSVG = styled("svg")`
  fill: ${props => props.theme.colors.blue.default};

  :hover,
  :focus {
    fill: ${props => props.theme.colors.blue.hover};
  }

  :active {
    fill: ${props => props.theme.colors.blue.pressed};
  }
`;

export const GreySVG = styled("svg")`
  fill: ${props => props.theme.colors.text.body};

  :active {
    fill: ${props => props.theme.colors.text.default};
  }
`;

export const RedSVG = styled("svg")`
  fill: ${props => props.theme.colors.red.default};

  :hover,
  :focus {
    fill: ${props => props.theme.colors.red.hover};
  }

  :active {
    fill: ${props => props.theme.colors.red.pressed};
  }
`;

export const GreenSVG = styled("svg")`
  fill: ${props => props.theme.colors.green.default};

  :hover,
  :focus {
    fill: ${props => props.theme.colors.green.hover};
  }

  :active {
    fill: ${props => props.theme.colors.green.pressed};
  }
`;
