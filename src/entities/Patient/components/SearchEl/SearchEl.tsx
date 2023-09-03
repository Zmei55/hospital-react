import { useAppSelector, Modal, SpinnerCenterBox, Spinner, Icon } from "shared";
import {
  SearchModalHeaderEl,
  SearchModalFormEl,
  SearchListEl,
  usePatientsListFind,
  useTogglePatientsModal,
} from "entities/Patient";

import {
  Container,
  ModalBtn,
  ModalBoby,
  NotFoundText,
} from "./SearchEl.styled";

export const SearchEl: React.FC = () => {
  const patientsList = useAppSelector(state => state.patients.patients);
  const showModal = useAppSelector(state => state.patients.modalPatient);
  const { handlePatientsListFind, isLoading, isError } = usePatientsListFind();
  const { togglePatientsModal } = useTogglePatientsModal();

  return (
    <Container>
      <ModalBtn
        id="modalFindPatBtn"
        type="button"
        onClick={togglePatientsModal}
        aria-label="find patient"
      >
        <Icon icon="user-plus" size={48} />
        Wählen Sie einen Patient aus
      </ModalBtn>

      {showModal && (
        <Modal width="1392px" height="752px" onClose={togglePatientsModal}>
          <SearchModalHeaderEl />

          <ModalBoby>
            <SearchModalFormEl
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
