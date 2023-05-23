import { SearchAddServiceEl, ServiceModalEl } from "entities/Service";
import { useAppSelector } from "shared";

// import {} from "./Search.styled";

interface ISearch {}

export const SearchEl: React.FC<ISearch> = () => {
  const showModal = useAppSelector(state => state.services.modalService);

  return (
    <>
      <SearchAddServiceEl />

      {showModal && <ServiceModalEl />}
    </>
  );
};
