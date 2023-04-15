import {
  useClearPatientsList,
  IPatientSearchModalHeader,
} from "entities/Patient";
import { TransparentBtn, AcceptBlueBtn, CrossRedBtn } from "shared";

import {
  ModalHeader,
  ModalTitle,
  ButtonContainer,
} from "./PatientSearchModalHeader.styled";

export const PatientSearchModalHeader: React.FC<IPatientSearchModalHeader> = ({
  handlePatientsListFind,
  toggleModal,
}) => {
  const [clearPatientsList] = useClearPatientsList();

  return (
    <ModalHeader>
      <ModalTitle>Wählen Sie einen Patient aus</ModalTitle>

      <ButtonContainer>
        <TransparentBtn
          type="button"
          width="205px"
          height="72px"
          onClick={clearPatientsList}
        >
          Reset
        </TransparentBtn>

        <AcceptBlueBtn
          width="162px"
          height="72px"
          onClick={handlePatientsListFind}
        >
          Find
        </AcceptBlueBtn>

        <CrossRedBtn width="72px" height="72px" onClick={toggleModal} />
      </ButtonContainer>
    </ModalHeader>
  );
};
