export interface IButton {
  width: string;
  height: string;
  background: "blue" | "grey" | "green" | "red" | "transparent";
  type?: "button" | "submit" | "reset";
  name?: string;
  color?: string;
  disabled?: boolean;
  border?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}
