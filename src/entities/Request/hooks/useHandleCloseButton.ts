import { useClearPatient } from "entities/Patient";
import { useAppNavigate } from "shared";

export const useHandleCloseButton = () => {
  const { handleNavigate } = useAppNavigate();
  const { clearPatient } = useClearPatient();

  const handleCloseBtn = () => {
    clearPatient();
    handleNavigate("/dashboard/treatment-room");
  };

  return { handleCloseBtn };
};
