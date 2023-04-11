import { IButton } from "shared";

import { Button, IconCross } from "./CrossRedBtn.styled";

export const CrossRedBtn: React.FC<IButton> = ({
  type,
  width,
  height,
  onClick,
}) => {
  return (
    <Button type={type} style={{ width, height }} onClick={onClick}>
      <IconCross />
    </Button>
  );
};
