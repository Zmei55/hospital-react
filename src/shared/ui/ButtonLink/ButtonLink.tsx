import { ButtonHTMLAttributes } from "react";
import { Icon } from "shared";

import {
  LinkBtn,
  BigBtn,
  MediumBtn,
  SmallBtn,
  MenuBtn,
  ButtonTitle,
} from "./ButtonLink.styled";

interface IButtonLink extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  to: string;
  icon: string;
  disabled?: boolean;
}

interface IButtonMenu extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: string;
  disabled?: boolean;
}

export const BigLinkButton: React.FC<IButtonLink> = props => {
  return (
    <BigBtn {...props}>
      <LinkBtn to={props.to}>
        <Icon icon={props.icon} size={150} />
        <ButtonTitle>{props.text}</ButtonTitle>
      </LinkBtn>
    </BigBtn>
  );
};

export const MediumLinkButton: React.FC<IButtonLink> = props => {
  return (
    <MediumBtn {...props}>
      <LinkBtn to={props.to}>
        <Icon icon={props.icon} size={150} />
        <ButtonTitle>{props.text}</ButtonTitle>
      </LinkBtn>
    </MediumBtn>
  );
};

export const SmallLinkButton: React.FC<IButtonLink> = props => {
  return (
    <SmallBtn {...props}>
      <LinkBtn to={props.to}>
        <Icon icon={props.icon} size={150} />
        <ButtonTitle>{props.text}</ButtonTitle>
      </LinkBtn>
    </SmallBtn>
  );
};

export const MenuButton: React.FC<IButtonMenu> = props => {
  return (
    <MenuBtn {...props}>
      <Icon icon={props.icon} size={48} />
      <ButtonTitle>{props.text}</ButtonTitle>
    </MenuBtn>
  );
};
