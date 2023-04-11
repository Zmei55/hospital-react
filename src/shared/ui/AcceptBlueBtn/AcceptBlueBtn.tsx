import { IButton } from "shared";

import { Button } from "./AcceptBlueBtn.styled";

export const AcceptBlueBtn: React.FC<IButton> = ({
  type,
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
