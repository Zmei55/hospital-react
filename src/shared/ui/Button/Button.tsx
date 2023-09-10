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

export const Button: React.FC<IButton> = ({
  type = "button",
  style,
  id,
  form,
  name,
  background,
  disabled,
  children,
  onClick,
}) => {
  return (
    <>
      {background === "blue" && (
        <BlueBtn
          type={type}
          id={id}
          form={form}
          name={name}
          style={style}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </BlueBtn>
      )}

      {background === "red" && (
        <RedBtn
          type={type}
          id={id}
          form={form}
          name={name}
          style={style}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </RedBtn>
      )}

      {background === "green" && (
        <GreenBtn
          type={type}
          id={id}
          form={form}
          name={name}
          style={style}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </GreenBtn>
      )}

      {background === "grey" && (
        <GrayBtn
          type={type}
          id={id}
          form={form}
          name={name}
          style={style}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </GrayBtn>
      )}

      {background === "transparent" && (
        <TransparentBtn
          type={type}
          id={id}
          form={form}
          name={name}
          style={style}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </TransparentBtn>
      )}
    </>
  );
};
