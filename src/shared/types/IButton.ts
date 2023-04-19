export interface IButton {
  width: string;
  height: string;
  type?: "button" | "submit" | "reset";
  color?: string;
  backgroundColor?:
    | "black"
    | "white"
    | "text"
    | "primary"
    | "secondary"
    | "success"
    | "error";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}
