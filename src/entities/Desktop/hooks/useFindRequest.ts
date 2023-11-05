import { useAppNavigate } from "shared";
import { useGetLaborsList } from "entities/Service";

export const useFindRequest = () => {
  const [navigate] = useAppNavigate();
  const { fetchLaborList } = useGetLaborsList();

  const handleFindRequest: React.MouseEventHandler<HTMLButtonElement> = () => {
    fetchLaborList();

    navigate("/find-request");
  };

  return { handleFindRequest };
};
