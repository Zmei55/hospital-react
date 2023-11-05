import { ReactNode } from "react";

import { NotFoundText } from "./NotFound.styled";

interface INotFound {
  children: ReactNode;
}

export const NotFound: React.FC<INotFound> = ({ children }) => {
  return <NotFoundText>{children}</NotFoundText>;
};
