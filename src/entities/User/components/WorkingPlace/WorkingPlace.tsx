import { useAppSelector } from "shared";

import { HeaderTitle } from "./WorkingPlace.styled";

export const WorkingPlace: React.FC = () => {
  const appTitle = useAppSelector(state => state.app.appTitle);

  return <HeaderTitle>{appTitle}</HeaderTitle>;
};
