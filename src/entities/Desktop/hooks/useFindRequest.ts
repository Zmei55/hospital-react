import { useAppNavigate } from "shared";
import { useGetLaborsList } from "entities/Service";

export const useFindRequest = () => {
  const { handleNavigate } = useAppNavigate();
  const { fetchLaborList } = useGetLaborsList();

  const handleFindRequest: React.MouseEventHandler<HTMLButtonElement> = () => {
    fetchLaborList();

    handleNavigate("/find-request");
  };

  return { handleFindRequest };
};
