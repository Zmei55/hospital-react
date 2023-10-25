import { useState } from "react";
import { useAppSelector } from "shared";

export const useGetUserData = () => {
  const [workplaceToUpper, setWorkplaceToUpper] = useState("");
  const { name, workplace } = useAppSelector(state => state.auth.user);

  if (workplace && workplaceToUpper === "") {
    const fullWorkplace = workplace[0].toUpperCase() + workplace.slice(1);
    setWorkplaceToUpper(fullWorkplace);
  }

  return { name, workplaceToUpper };
};
