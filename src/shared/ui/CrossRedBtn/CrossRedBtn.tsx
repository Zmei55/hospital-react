import { Button, IconCross } from "./CrossRedBtn.styled";

interface ICrossRedBtn {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style: React.CSSProperties;
}

export const CrossRedBtn = ({ onClick, style }: ICrossRedBtn) => {
  return (
    <Button type="button" style={style} onClick={onClick}>
      <IconCross />
    </Button>
  );
};
