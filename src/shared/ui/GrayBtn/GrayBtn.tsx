import { IButton } from "shared/types";

import { Button } from "./GrayBtn.styled";

export const GrayBtn: React.FC<IButton> = ({
  type = "button",
  width,
  height,
  children,
  onClick,
}) => {
  return (
    <Button type={type} style={{ width, height }} onClick={onClick}>
      {children}
    </Button>
  );
};
