import styled from "@emotion/styled";

export const Button = styled.button`
  font-family: "Inter";
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;

  background-color: transparent;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};

  :not(:last-child) {
    margin-right: 24px;
  }
`;
