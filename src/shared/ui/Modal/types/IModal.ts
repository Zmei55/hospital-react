import { ReactNode } from "react";

export interface IModal {
  width: string;
  height: string;
  children: ReactNode;
  onClose: () => void;
}
