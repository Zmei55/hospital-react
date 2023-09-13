import { useClearPatient } from "entities/Patient";
import { useAppNavigate } from "shared";

export const useHandleCloseButton = () => {
  const [navigate] = useAppNavigate();
  const { clearPatient } = useClearPatient();

  const handleCloseBtn = () => {
    clearPatient();
    navigate("/desktop");
  };

  return { handleCloseBtn };
};
