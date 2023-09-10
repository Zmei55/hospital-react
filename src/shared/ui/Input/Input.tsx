import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";
import { Input } from "./Input.styled";

// interface IInputProps {
//   type?: "text" | "email" | "password" | "date" | "radio" | "checkbox";
//   id?: string;
//   name?: string;
//   value?: string | number | readonly string[];
//   placeholder?: string;
//   required?: boolean;
//   autoFocus?: boolean;
//   disabled?: boolean;
//   onChange?: React.ChangeEventHandler<HTMLInputElement>;
// }

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputEl = forwardRef(
  (props: IInputProps, ref: LegacyRef<HTMLInputElement>) => (
    <Input ref={ref} {...props} />
  )
);
