import {
  BlueBtn,
  RedBtn,
  GreenBtn,
  GrayBtn,
  TransparentBtn,
} from "./Button.styled";

interface IButton {
  width?: string;
  height?: string;
  background: "blue" | "grey" | "green" | "red" | "transparent";
  type?: "button" | "submit" | "reset";
  id?: string;
  name?: string;
  color?: string;
  disabled?: boolean;
  border?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  padding?: string | number;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
}

export const Button: React.FC<IButton> = ({
  type = "button",
  width,
  height,
  id,
  name,
  color,
  background,
  border,
  disabled,
  children,
  onClick,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}) => {
  return (
    <>
      {background === "blue" && (
        <BlueBtn
          type={type}
          id={id}
          name={name}
          style={{
            width,
            height,
            color,
            border,
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft,
            marginTop,
            marginRight,
            marginBottom,
            marginLeft,
          }}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </BlueBtn>
      )}

      {background === "red" && (
        <RedBtn
          type={type}
          id={id}
          name={name}
          style={{
            width,
            height,
            color,
            border,
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft,
            marginTop,
            marginRight,
            marginBottom,
            marginLeft,
          }}
          color={color}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </RedBtn>
      )}

      {background === "green" && (
        <GreenBtn
          type={type}
          id={id}
          name={name}
          style={{
            width,
            height,
            color,
            border,
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft,
            marginTop,
            marginRight,
            marginBottom,
            marginLeft,
          }}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </GreenBtn>
      )}

      {background === "grey" && (
        <GrayBtn
          type={type}
          id={id}
          name={name}
          style={{
            width,
            height,
            color,
            border,
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft,
            marginTop,
            marginRight,
            marginBottom,
            marginLeft,
          }}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </GrayBtn>
      )}

      {background === "transparent" && (
        <TransparentBtn
          type={type}
          id={id}
          name={name}
          style={{
            width,
            height,
            color,
            border,
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft,
            marginTop,
            marginRight,
            marginBottom,
            marginLeft,
          }}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </TransparentBtn>
      )}
    </>
  );
};
