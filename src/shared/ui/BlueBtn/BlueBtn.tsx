import { IButton } from "shared";

import { Button } from "./BlueBtn.styled";

export const BlueBtn: React.FC<IButton> = ({
  type = "button",
  width,
  height,
  disabled,
  children,
  onClick,
}) => {
  return (
    <Button
      type={type}
      style={{ width, height }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
