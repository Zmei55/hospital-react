import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Button = styled.button`
  display: flex;

  color: ${props => props.theme.colors.text.default};
  fill: ${props => props.theme.colors.blue.default};

  border: 2px solid ${props => props.theme.colors.blue.default};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.white};
  outline: none;

  :focus,
  :hover {
    fill: ${props => props.theme.colors.blue.hover};
    border-color: ${props => props.theme.colors.blue.hover};
  }

  :active {
    fill: ${props => props.theme.colors.blue.pressed};
    border-color: ${props => props.theme.colors.blue.pressed};
  }

  :disabled {
    color: ${props => props.theme.colors.text.placeholder};
    fill: ${props => props.theme.colors.text.placeholder};
    border-color: ${props => props.theme.colors.text.placeholder};
    cursor: not-allowed;
  }

  /* @media screen and (max-width: 1279px) { */
  /* height: 228px; */
  /* } */

  /* @media screen and (min-width: 1280px) { */
  /* height: 100%; */
  /* } */
`;

export const LinkBtn = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  color: inherit;
  text-decoration: none;

  width: 100%;
  height: 100%;
  padding: ${props => props.theme.spacing(10)};
`;

export const BigBtn = styled(Button)`
  width: 100%;
  height: 439px;
`;

export const MediumBtn = styled(Button)`
  /* @media screen and (max-width: 959px) {
    width: 100%;
  } */

  /* @media screen and (min-width: 960px) { */
  flex-grow: 4;
  height: 439px;
  /* } */
`;

export const SmallBtn = styled(Button)`
  /* @media screen and (max-width: 959px) {
    width: 100%;
  } */

  /* @media screen and (min-width: 960px) { */
  flex-grow: 3;
  /* } */
`;

export const MenuBtn = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.blue.default};

  :focus,
  :hover {
    color: ${props => props.theme.colors.blue.hover};
  }

  :active {
    color: ${props => props.theme.colors.blue.pressed};
  }

  :disabled {
    color: ${props => props.theme.colors.text.placeholder};
  }

  @media screen and (min-width: 1280px) and (max-width: 1599px) {
    height: 178px;
  }

  /* @media screen and (max-width: 1279px) {
    height: 228px;
  }

  @media screen and (min-width: 1280px) {
    height: 100%;
  } */
`;

export const ButtonTitle = styled.span`
  font-weight: 600;

  @media screen and (max-width: 1279px) {
    font-size: 24px;
    line-height: 1.17;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
    line-height: 1.13;
  }
`;
