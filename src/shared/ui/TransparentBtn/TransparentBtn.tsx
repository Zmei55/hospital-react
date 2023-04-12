import { IButton } from "shared";

import { Button } from "./TransparentBtn.styled";

export const TransparentBtn: React.FC<IButton> = ({
  type,
  width,
  height,
  color,
  children,
  onClick,
}) => {
  return (
    <Button type={type} style={{ width, height, color }} onClick={onClick}>
      {children}
    </Button>
  );
};
