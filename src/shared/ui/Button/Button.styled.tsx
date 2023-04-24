import styled from "@emotion/styled";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;

  border-radius: ${props => props.theme.borderRadius};

  :not(:last-child) {
    margin-right: ${props => props.theme.spacing(6)};
  }
`;

export const BlueBtn = styled(Button)`
  color: ${props => props.theme.colors.text.white};

  background-color: ${props => props.theme.colors.blue.default};
  border-color: transparent;

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.blue.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.blue.pressed};
  }

  :disabled {
    background-color: ${props => props.theme.colors.blue.disabled};
  }
`;

export const RedBtn = styled(Button)`
  color: ${props => props.theme.colors.text.white};

  background-color: ${props => props.theme.colors.red.default};
  border-color: transparent;

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.red.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.red.pressed};
  }

  :disabled {
    background-color: ${props => props.theme.colors.red.disabled};
  }
`;

export const GreenBtn = styled(Button)`
  color: ${props => props.theme.colors.text.white};

  background-color: ${props => props.theme.colors.green.default};
  border-color: transparent;

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.green.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.green.pressed};
  }

  :disabled {
    background-color: ${props => props.theme.colors.green.disabled};
  }
`;

export const GrayBtn = styled(Button)`
  color: ${props => props.theme.colors.text.body};

  background-color: ${props => props.theme.colors.grey.default};
  border-color: transparent;

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.grey.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.grey.pressed};
  }

  :disabled {
    background-color: ${props => props.theme.colors.grey.disabled};
  }
`;

export const TransparentBtn = styled(Button)`
  color: ${props => props.theme.colors.text.body};
  background-color: transparent;
  border: ${props => props.theme.border};
`;
