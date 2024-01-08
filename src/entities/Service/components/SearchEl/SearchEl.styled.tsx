import styled from "@emotion/styled";

export const ModalBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.colors.blue.default};
  fill: ${props => props.theme.colors.blue.default};

  border: 2px solid ${props => props.theme.colors.blue.default};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  background-color: transparent;
  outline: none;

  :focus,
  :hover {
    color: ${props => props.theme.colors.blue.hover};
    fill: ${props => props.theme.colors.blue.hover};
    border-color: ${props => props.theme.colors.blue.hover};
  }

  :active {
    color: ${props => props.theme.colors.blue.pressed};
    fill: ${props => props.theme.colors.blue.pressed};
    border-color: ${props => props.theme.colors.blue.pressed};
  }

  :disabled {
    color: ${props => props.theme.colors.text.placeholder};
    fill: ${props => props.theme.colors.text.placeholder};
    border-color: ${props => props.theme.colors.text.placeholder};
    cursor: not-allowed;
  }

  @media screen and (max-width: 1279px) {
    height: 228px;
  }

  @media screen and (min-width: 1280px) {
    height: 100%;
  }
`;

export const ModalBtnTitle = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
`;
