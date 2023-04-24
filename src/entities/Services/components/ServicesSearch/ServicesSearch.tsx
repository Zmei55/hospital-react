import { ServicesSearchModalBtn, ServicesSearchModal } from "entities/Services";
import { useToggle } from "shared";

// import {} from "./ServicesSearch.styled";

interface IServicesSearch {}

export const ServicesSearch: React.FC<IServicesSearch> = () => {
  const [showModal, toggleModal] = useToggle(false);

  return (
    <>
      <ServicesSearchModalBtn toggleModal={toggleModal} />

      {showModal && <ServicesSearchModal toggleModal={toggleModal} />}
    </>
  );
};
