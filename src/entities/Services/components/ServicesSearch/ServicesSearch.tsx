import { ServicesSearchModalBtn, ServicesSearchModal } from "entities/Services";
import { useAppSelector } from "shared";

// import {} from "./ServicesSearch.styled";

interface IServicesSearch {}

export const ServicesSearch: React.FC<IServicesSearch> = () => {
  const showModal = useAppSelector(state => state.services.modal);

  return (
    <>
      <ServicesSearchModalBtn />

      {showModal && <ServicesSearchModal />}
    </>
  );
};
