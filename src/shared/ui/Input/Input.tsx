import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";
import { Input } from "./Input.styled";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputEl = forwardRef(
  (props: IInputProps, ref: LegacyRef<HTMLInputElement>) => (
    <Input ref={ref} {...props} />
  )
);
