import { useClearPatient } from "entities/Patient";
import { useAppNavigate } from "shared";

export const useHandleCloseButton = () => {
  const { handleNavigate } = useAppNavigate();
  const { clearPatient } = useClearPatient();

  const handleCloseBtn = () => {
    clearPatient();
    handleNavigate("/desktop");
  };

  return { handleCloseBtn };
};
