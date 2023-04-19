export interface IButton {
  width: string;
  height: string;
  type?: "button" | "submit" | "reset";
  color?: "blue" | "grey" | "success" | "red";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}
