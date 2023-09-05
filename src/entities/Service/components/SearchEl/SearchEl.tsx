import { ServiceModalEl, useToggleServicesModal } from "entities/Service";
import { useAppSelector, Icon } from "shared";

import { ModalBtn, ModalBtnTitle } from "./SearchEl.styled";

interface ISearch {}

export const SearchEl: React.FC<ISearch> = () => {
  const showModal = useAppSelector(state => state.services.modalService);
  const patient = useAppSelector(state => state.patients.patient);
  const { toggleServicesModal } = useToggleServicesModal();

  return (
    <>
      <ModalBtn
        id="modalSerBtn"
        type="button"
        onClick={() => toggleServicesModal()}
        disabled={patient._id === ""}
      >
        <Icon icon="list-plus" size={48} />
        {patient._id === "" ? (
          <ModalBtnTitle>
            Dienste können nach Auswahl eines Patienten hinzugefügt werden
          </ModalBtnTitle>
        ) : (
          <ModalBtnTitle>Fügen Sie Dienste hinzu</ModalBtnTitle>
        )}
      </ModalBtn>

      {showModal && <ServiceModalEl />}
    </>
  );
};
