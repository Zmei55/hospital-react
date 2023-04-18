import { IButton } from "shared";

import { Button } from "./RedBtn.styled";

export const RedBtn: React.FC<IButton> = ({
  type = "button",
  width,
  height,
  onClick,
  children,
}) => {
  return (
    <Button type={type} style={{ width, height }} onClick={onClick}>
      {children}
    </Button>
  );
};
