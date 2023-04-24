import { useAppSelector, Icon } from "shared";

import { ModalBtn, ModalBtnTitle } from "./ServicesSearchModalBtn.styled";

interface IServicesSearchModalBtn {
  toggleModal: () => void;
}

export const ServicesSearchModalBtn: React.FC<IServicesSearchModalBtn> = ({
  toggleModal,
}) => {
  const patient = useAppSelector(state => state.patient.patient);

  return (
    <ModalBtn
      type="button"
      onClick={() => toggleModal()}
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
  );
};
