import { useState } from "react";

export const useInput = (
  initialValue: string
): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  React.ChangeEventHandler<HTMLInputElement>
] => {
  const [value, setValue] = useState(initialValue);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setValue(event.target.value);
  };

  return [value, setValue, onChange];
};
