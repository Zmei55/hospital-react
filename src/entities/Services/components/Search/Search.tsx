import { SearchAddServiceEl, SearchModalEl } from "entities/Services";
import { useAppSelector } from "shared";

// import {} from "./Search.styled";

interface ISearch {}

export const SearchEl: React.FC<ISearch> = () => {
  const showModal = useAppSelector(state => state.services.modal);

  return (
    <>
      <SearchAddServiceEl />

      {showModal && <SearchModalEl />}
    </>
  );
};
