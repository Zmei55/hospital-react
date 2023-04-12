export interface IButton {
  width: string;
  height: string;
  type?: "button" | "submit" | "reset";
  color?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}
