import { IService } from "entities/Services";
import { useAppSelector, Icon } from "shared";

import { ModalBtn, ModalBtnTitle } from "./ServicesSearchModalBtn.styled";

interface IServicesSearchModalBtn {
  toggleModal: (
    setFilter: (value: React.SetStateAction<string>) => void,
    setVisibleServices: (value: React.SetStateAction<IService[]>) => void
  ) => void;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setVisibleServices: React.Dispatch<React.SetStateAction<IService[]>>;
}

export const ServicesSearchModalBtn: React.FC<IServicesSearchModalBtn> = ({
  toggleModal,
  setFilter,
  setVisibleServices,
}) => {
  const patient = useAppSelector(state => state.patient.patient);

  return (
    <ModalBtn
      type="button"
      onClick={() => toggleModal(setFilter, setVisibleServices)}
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
