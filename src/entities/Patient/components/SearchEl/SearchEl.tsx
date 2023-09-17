import { useTranslation } from "react-i18next";
import { SearchModalEl, useTogglePatientsModal } from "entities/Patient";
import { useAppSelector, Modal, Icon } from "shared";

import { Container, ModalBtn } from "./SearchEl.styled";

export const SearchEl: React.FC = () => {
  const showModal = useAppSelector(state => state.patients.modalPatient);
  const { togglePatientsModal } = useTogglePatientsModal();
  const { t } = useTranslation();

  return (
    <Container>
      <ModalBtn
        id="modalFindPatBtn"
        type="button"
        onClick={togglePatientsModal}
        aria-label="find patient"
      >
        <Icon icon="user-plus" size={48} />
        {t("patient.selectPatientBtn")}
      </ModalBtn>

      {showModal && (
        <Modal width="1392px" height="752px" onClose={togglePatientsModal}>
          <SearchModalEl />
        </Modal>
      )}
    </Container>
  );
};
