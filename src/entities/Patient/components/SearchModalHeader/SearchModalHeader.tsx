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
  toggleModal: React.MouseEventHandler<HTMLButtonElement>;
}

export const SearchModalHeader: React.FC<ISearchModalHeader> = ({
  handlePatientsListFind,
  toggleModal,
}) => {
  const { clearPatientsList } = useClearPatientsList();

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
          Reset
        </ResetBtn>

        <FindBtn
          width="162px"
          height="72px"
          background="blue"
          onClick={handlePatientsListFind}
        >
          Find
        </FindBtn>

        <CloseBtn
          width="72px"
          height="72px"
          background="red"
          onClick={toggleModal}
        >
          <Icon icon="cross" size={48} color="white" />
        </CloseBtn>
      </ButtonContainer>
    </ModalHeader>
  );
};
