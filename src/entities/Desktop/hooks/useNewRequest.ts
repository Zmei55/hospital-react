import { useRequestsCount } from "entities/Request";
import { useAppNavigate } from "shared";

export const useNewRequest = () => {
  const { handleNavigate } = useAppNavigate();
  const { getRequestsCount } = useRequestsCount();

  const handleNewRequest: React.MouseEventHandler<HTMLButtonElement> = () => {
    getRequestsCount();

    handleNavigate("/request");
  };

  return { handleNewRequest };
};
