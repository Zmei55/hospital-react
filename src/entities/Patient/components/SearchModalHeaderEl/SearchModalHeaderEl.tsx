import { useTogglePatientsModal } from "entities/Patient";
import {
  Button as ResetBtn,
  Button as FindBtn,
  Button as CloseBtn,
  Icon,
} from "shared";

import {
  ModalHeader,
  ModalTitle,
  ButtonContainer,
} from "./SearchModalHeaderEl.styled";

interface ISearchModalHeader {
  resetPatients: () => void;
  handlePatientsListFind: React.MouseEventHandler<HTMLButtonElement>;
}

export const SearchModalHeaderEl: React.FC<ISearchModalHeader> = ({
  resetPatients,
  handlePatientsListFind,
}) => {
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

      <ButtonContainer>
        <ResetBtn
          id="resetSearchPatBtn"
          width="205px"
          height="72px"
          background="transparent"
          marginRight="24px"
          onClick={handleResetBtn}
        >
          Rücksetzen
        </ResetBtn>

        <FindBtn
          id="findSearchPatBtn"
          width="162px"
          height="72px"
          background="blue"
          marginRight="24px"
          onClick={handlePatientsListFind}
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
      </ButtonContainer>
    </ModalHeader>
  );
};
