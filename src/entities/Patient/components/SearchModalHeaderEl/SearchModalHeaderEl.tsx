import { useTogglePatientsModal, usePatientsListFind } from "entities/Patient";
import {
  Button as ResetBtn,
  Button as FindBtn,
  Button as CloseBtn,
  Icon,
} from "shared";

import { ModalHeader, ModalTitle } from "./SearchModalHeaderEl.styled";

export const SearchModalHeaderEl: React.FC = () => {
  const { resetPatients } = usePatientsListFind();
  const { togglePatientsModal } = useTogglePatientsModal();

  const handleResetBtn = () => {
    resetPatients();
  };

  const handleCloseBtn = () => {
    resetPatients();
    togglePatientsModal();
  };

  return (
    <ModalHeader>
      <ModalTitle>Wählen Sie einen Patient aus</ModalTitle>

      <ResetBtn
        id="resetSearchPatBtn"
        style={{
          height: "72px",
          paddingRight: "44px",
          paddingLeft: "44px",
          marginRight: "24px",
        }}
        background="transparent"
        onClick={handleResetBtn}
      >
        Rücksetzen
      </ResetBtn>

      <FindBtn
        id="findSearchPatBtn"
        type="submit"
        form="findPatientList"
        style={{
          height: "72px",
          paddingRight: "44px",
          paddingLeft: "44px",
          marginRight: "24px",
        }}
        background="blue"
      >
        Finden
      </FindBtn>

      <CloseBtn
        id="closeSearchPatBtn"
        background="red"
        style={{
          width: "72px",
          height: "72px",
        }}
        onClick={handleCloseBtn}
      >
        <Icon icon="cross" size={48} color="white" />
      </CloseBtn>
    </ModalHeader>
  );
};
