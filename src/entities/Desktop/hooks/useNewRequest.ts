import { useRequestsCount } from "entities/Request";
import { useAppNavigate } from "shared";

export const useNewRequest = () => {
  const [navigate] = useAppNavigate();
  const { getRequestsCount } = useRequestsCount();

  const handleNewRequest: React.MouseEventHandler<HTMLButtonElement> = () => {
    getRequestsCount();

    navigate("/request");
  };

  return { handleNewRequest };
};
