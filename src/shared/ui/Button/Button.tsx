import { IButton } from "shared";

import { Btn } from "./Button.styled";

export const Button: React.FC<IButton> = ({
  type = "button",
  width,
  height,
  backgroundColor,
  disabled,
  children,
  onClick,
}) => {
  return (
    <Btn
      type={type}
      style={{ width, height, backgroundColor }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Btn>
  );
};
