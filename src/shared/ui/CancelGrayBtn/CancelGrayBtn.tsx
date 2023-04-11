import { IButton } from "shared/types";

import { Button } from "./CancelGrayBtn.styled";

export const CancelGrayBtn: React.FC<IButton> = ({
  type,
  width,
  height,
  children,
  onClick,
}) => {
  return (
    <Button type="button" style={{ width, height }} onClick={onClick}>
      {children}
    </Button>
  );
};
