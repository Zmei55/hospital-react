import { NotFoundText } from "./NotFound.styled";

interface INotFound {
  text: string;
}

export const NotFound: React.FC<INotFound> = ({ text }) => {
  return <NotFoundText>{text}</NotFoundText>;
};
