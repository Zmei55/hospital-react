import { useAppSelector, Modal, Icon } from "shared";
import { SearchModalEl, useTogglePatientsModal } from "entities/Patient";

import { Container, ModalBtn } from "./SearchEl.styled";

export const SearchEl: React.FC = () => {
  const showModal = useAppSelector(state => state.patients.modalPatient);
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
          <SearchModalEl />
        </Modal>
      )}
    </Container>
  );
};
