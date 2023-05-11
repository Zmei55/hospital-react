import {
  useClearPatientsList,
  initialSearchPatientState,
  ISearchState,
} from "entities/Patient";
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
} from "./SearchModalHeader.styled";

interface ISearchModalHeader {
  setFormState: React.Dispatch<React.SetStateAction<ISearchState>>;
  handlePatientsListFind: React.MouseEventHandler<HTMLButtonElement>;
  toggleModal: () => void;
}

export const SearchModalHeaderEl: React.FC<ISearchModalHeader> = ({
  setFormState,
  handlePatientsListFind,
  toggleModal,
}) => {
  const { clearPatientsList } = useClearPatientsList();

  const handleResetBtn = () => {
    setFormState(initialSearchPatientState);
    clearPatientsList();
  };

  const handleCloseBtn = () => {
    toggleModal();
    clearPatientsList();
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
          onClick={handleResetBtn}
        >
          Rücksetzen
        </ResetBtn>

        <FindBtn
          id="findSearchPatBtn"
          width="162px"
          height="72px"
          background="blue"
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
