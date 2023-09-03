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
        height="72px"
        paddingRight="44px"
        paddingLeft="44px"
        background="transparent"
        marginRight="24px"
        onClick={handleResetBtn}
      >
        Rücksetzen
      </ResetBtn>

      <FindBtn
        id="findSearchPatBtn"
        type="submit"
        form="findPatientList"
        height="72px"
        paddingRight="44px"
        paddingLeft="44px"
        background="blue"
        marginRight="24px"
      >
        Finden
      </FindBtn>

      <CloseBtn
        id="closeSearchPatBtn"
        width="72px"
        height="72px"
        background="red"
        onClick={handleCloseBtn}
      >
        <Icon icon="cross" size={48} color="white" />
      </CloseBtn>
    </ModalHeader>
  );
};
