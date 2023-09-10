import { ButtonHTMLAttributes } from "react";
import {
  BlueBtn,
  RedBtn,
  GreenBtn,
  GrayBtn,
  TransparentBtn,
} from "./Button.styled";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  background: "blue" | "grey" | "green" | "red" | "transparent";
}

export const Button: React.FC<IButton> = props => {
  return (
    <>
      {props.background === "blue" && (
        <BlueBtn {...props}>{props.children}</BlueBtn>
      )}

      {props.background === "red" && (
        <RedBtn {...props}>{props.children}</RedBtn>
      )}

      {props.background === "green" && (
        <GreenBtn {...props}>{props.children}</GreenBtn>
      )}

      {props.background === "grey" && (
        <GrayBtn {...props}>{props.children}</GrayBtn>
      )}

      {props.background === "transparent" && (
        <TransparentBtn {...props}>{props.children}</TransparentBtn>
      )}
    </>
  );
};
