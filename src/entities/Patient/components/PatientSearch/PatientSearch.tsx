import { useAppSelector, Modal, SpinnerCenterBox, Spinner } from "shared";
import {
  PatientSearchModalHeader,
  PatientSearchModalForm,
  PatientSearchList,
  useChoosePatient,
  useHandlePatientChange,
  usePatientsListFind,
  useToggleModal,
  initialSearchPatientState,
} from "entities/Patient";

import {
  Container,
  ModalBtn,
  IconSelectPatient,
  ModalContainer,
} from "./PatientSearch.styled";

export function PatientSearch() {
  const patientsList = useAppSelector(state => state.patients.patients);
  const { formState, handleChange } = useHandlePatientChange(
    initialSearchPatientState
  );
  const { handlePatientsListFind, isLoading } = usePatientsListFind(formState);
  const [showModal, toggleModal] = useToggleModal(false);
  const [choosePatient] = useChoosePatient("");

  return (
    <Container>
      <ModalBtn type="button" onClick={toggleModal} aria-label="find patient">
        <IconSelectPatient />
        Wählen Sie einen Patient aus
      </ModalBtn>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalContainer>
            <PatientSearchModalHeader
              handlePatientsListFind={handlePatientsListFind}
              toggleModal={toggleModal}
            />

            <PatientSearchModalForm
              formState={formState}
              handleChange={handleChange}
              handlePatientsListFind={handlePatientsListFind}
            />

            {isLoading ? (
              <SpinnerCenterBox>
                <Spinner size={80} />
              </SpinnerCenterBox>
            ) : (
              <>
                {patientsList.length > 0 && (
                  <PatientSearchList
                    patientsList={patientsList}
                    choosePatient={choosePatient}
                  />
                )}
              </>
            )}
          </ModalContainer>
        </Modal>
      )}
    </Container>
  );
}
