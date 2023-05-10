import { Input } from "./Input.styled";

interface IInput {
  width: string;
  height?: string;
  fontSize?: string;
  lineHeight?: number;
  value?: string | number | readonly string[];
  type?: "text" | "email" | "password" | "date" | "radio" | "checkbox";
  id?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  marginRight?: string;
  marginBottom?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputEl: React.FC<IInput> = ({
  type = "text",
  width,
  height = "72px",
  fontSize = "24px",
  lineHeight = "1.17",
  id,
  name,
  value,
  placeholder,
  required,
  autoFocus,
  onChange,
  disabled,
  marginRight,
  marginBottom,
}) => {
  return (
    <Input
      type={type}
      id={id}
      name={name}
      style={{ width, height, fontSize, lineHeight, marginRight, marginBottom }}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      autoFocus={autoFocus}
      disabled={disabled}
    />
  );
};
