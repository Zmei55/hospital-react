import { useClearPatientsList } from "entities/Patient";
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
  handlePatientsListFind: React.MouseEventHandler<HTMLButtonElement>;
  toggleModal: () => void;
}

export const SearchModalHeaderEl: React.FC<ISearchModalHeader> = ({
  handlePatientsListFind,
  toggleModal,
}) => {
  const { clearPatientsList } = useClearPatientsList();

  const handleCloseBtn = () => {
    toggleModal();
    clearPatientsList();
  };

  return (
    <ModalHeader>
      <ModalTitle>Wählen Sie einen Patient aus</ModalTitle>

      <ButtonContainer>
        <ResetBtn
          width="205px"
          height="72px"
          background="transparent"
          onClick={clearPatientsList}
        >
          Rücksetzen
        </ResetBtn>

        <FindBtn
          width="162px"
          height="72px"
          background="blue"
          onClick={handlePatientsListFind}
        >
          Finden
        </FindBtn>

        <CloseBtn
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
