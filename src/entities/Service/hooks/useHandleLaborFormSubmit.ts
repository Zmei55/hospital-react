import { useHandleLaborChange, useToggleLaborModal } from "entities/Service";
import { fetchRequestDetails } from "entities/Request";
import { useAppDispatch } from "shared";

export const useHandleLaborFormSubmit = () => {
  const dispatch = useAppDispatch();
  // const { details } = useHandleLaborChange();
  const { toggleLaborModal } = useToggleLaborModal();

  const handleLaborFormSubmit: React.FormEventHandler<
    HTMLFormElement
  > = event => {
    event.preventDefault();

    toggleLaborModal();
  };

  return { handleLaborFormSubmit };
};
