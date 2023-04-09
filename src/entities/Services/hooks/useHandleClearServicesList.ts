import { useState } from "react";
import { TServicesList } from "entities/Services";

export const useHandleClearServicesList = (
  initialValue: TServicesList
): [
  TServicesList,
  React.Dispatch<React.SetStateAction<TServicesList>>,
  React.MouseEventHandler<HTMLButtonElement>
] => {
  const [savedServicesList, setSavedServicesList] = useState(initialValue);

  const handleClearList = (): void => {
    setSavedServicesList([]);
  };

  return [savedServicesList, setSavedServicesList, handleClearList];
};
