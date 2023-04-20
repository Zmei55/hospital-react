import { useState } from "react";
import { IService } from "entities/Services";

export const useHandleClearServicesList = (
  initialValue: IService[]
): [
  IService[],
  React.Dispatch<React.SetStateAction<IService[]>>,
  React.MouseEventHandler<HTMLButtonElement>
] => {
  const [savedServicesList, setSavedServicesList] = useState(initialValue);

  const handleClearList = (): void => {
    setSavedServicesList([]);
  };

  return [savedServicesList, setSavedServicesList, handleClearList];
};
