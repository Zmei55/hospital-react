import { useToggle } from "shared";

export const useToggleContainersModal = () => {
  const [showContainersModal, toggleContainersModal] = useToggle(false);

  return { showContainersModal, toggleContainersModal };
};
