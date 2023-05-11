import { useAppSelector, Modal, SpinnerCenterBox, Spinner, Icon } from "shared";
import {
  SearchModalHeaderEl,
  SearchModalFormEl,
  SearchListEl,
  useHandlePatientChange,
  usePatientsListFind,
  useTogglePatientsModal,
  initialSearchPatientState,
} from "entities/Patient";

import { Container, ModalBtn, ModalBoby, NotFoundText } from "./Search.styled";

export const SearchEl: React.FC = () => {
  const patientsList = useAppSelector(state => state.patients.patients);
  const { formState, setFormState, handleChange } = useHandlePatientChange(
    initialSearchPatientState
  );
  const { handlePatientsListFind, isLoading, isError } =
    usePatientsListFind(formState);
  const { showModal, toggleModal } = useTogglePatientsModal();

  return (
    <Container>
      <ModalBtn
        id="modalFindPatBtn"
        type="button"
        onClick={toggleModal}
        aria-label="find patient"
      >
        <Icon icon="user-plus" size={48} />
        Wählen Sie einen Patient aus
      </ModalBtn>

      {showModal && (
        <Modal width="1392px" height="752px" onClose={toggleModal}>
          <SearchModalHeaderEl
            setFormState={setFormState}
            handlePatientsListFind={handlePatientsListFind}
            toggleModal={toggleModal}
          />

          <ModalBoby>
            <SearchModalFormEl
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
                  <SearchListEl patientsList={patientsList} />
                )}

                {isError && (
                  <NotFoundText>
                    Patient mit solchen Daten wurde nicht gefunden
                  </NotFoundText>
                )}
              </>
            )}
          </ModalBoby>
        </Modal>
      )}
    </Container>
  );
};
