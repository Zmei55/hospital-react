import { IButton } from "shared";

import {
  BlueBtn,
  RedBtn,
  GreenBtn,
  GrayBtn,
  TransparentBtn,
} from "./Button.styled";

export const Button: React.FC<IButton> = ({
  type = "button",
  width,
  height,
  color,
  background,
  border,
  disabled,
  children,
  onClick,
}) => {
  return (
    <>
      {background === "blue" && (
        <BlueBtn
          type={type}
          style={{ width, height, color }}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </BlueBtn>
      )}

      {background === "red" && (
        <RedBtn
          type={type}
          style={{ width, height, color }}
          color={color}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </RedBtn>
      )}

      {background === "green" && (
        <GreenBtn
          type={type}
          style={{ width, height, color }}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </GreenBtn>
      )}

      {background === "grey" && (
        <GrayBtn
          type={type}
          style={{ width, height, color }}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </GrayBtn>
      )}

      {background === "transparent" && (
        <TransparentBtn
          type={type}
          style={{ width, height, color, border }}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </TransparentBtn>
      )}
    </>
  );
};
