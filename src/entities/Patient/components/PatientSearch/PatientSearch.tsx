import { useAppSelector, Modal, SpinnerCenterBox, Spinner, Icon } from "shared";
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

import { Container, ModalBtn, ModalBoby } from "./PatientSearch.styled";

export const PatientSearch: React.FC = () => {
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
        <Icon icon="user-plus" size={48} />
        Wählen Sie einen Patient aus
      </ModalBtn>

      {showModal && (
        <Modal width="1392px" height="752px" onClose={toggleModal}>
          <PatientSearchModalHeader
            handlePatientsListFind={handlePatientsListFind}
            toggleModal={toggleModal}
          />

          <ModalBoby>
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
          </ModalBoby>
        </Modal>
      )}
    </Container>
  );
};
