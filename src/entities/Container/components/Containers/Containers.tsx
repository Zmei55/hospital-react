import { useTranslation } from "react-i18next";
import { useToggleContainersModal } from "entities/Container";
import {
  useAppSelector,
  Modal,
  Icon,
  Button as CloseBtn,
  Icon as CrossIcon,
} from "shared";

import {
  Container,
  Title,
  ModalBtn,
  ButtonTitle,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalText,
} from "./Containers.styled";

export const Containers: React.FC = () => {
  const servicesList = useAppSelector(state => state.services.services);
  const detailsList = useAppSelector(state => state.services.details);
  const { showContainersModal, toggleContainersModal } =
    useToggleContainersModal();
  const { t } = useTranslation();

  return (
    <Container data-testid="containers-container">
      <Title>{t("container.container")}</Title>
      <ModalBtn
        data-testid="add-containers-btn"
        type="button"
        disabled={!detailsList}
        onClick={toggleContainersModal}
      >
        <Icon icon="test-tube" size={48} />
        {!servicesList && !detailsList && (
          <ButtonTitle>
            {t("container.container", { context: "BtnIsDisabled_V1" })}
          </ButtonTitle>
        )}
        {servicesList && !detailsList && (
          <ButtonTitle>
            {t("container.container", { context: "BtnIsDisabled_V2" })}
          </ButtonTitle>
        )}
        {servicesList && detailsList && (
          <ButtonTitle>
            {t("container.container", { context: "BtnIsActive" })}
          </ButtonTitle>
        )}
      </ModalBtn>

      {showContainersModal && (
        <Modal
          data-testid="add-containers-modal"
          onClose={() => toggleContainersModal()}
        >
          <ModalHeader data-testid="containers-modal-header">
            <ModalTitle data-testid="containers-modal-header-title">
              {t("container.container", { context: "BtnIsActive" })}
            </ModalTitle>
            <CloseBtn
              data-testid="close-modal-containers-btn"
              background="red"
              style={{
                width: "72px",
                height: "72px",
                marginLeft: "auto",
              }}
              onClick={() => toggleContainersModal()}
            >
              <CrossIcon icon="cross" size={48} color="white" />
            </CloseBtn>
          </ModalHeader>

          <ModalBody data-testid="containers-modal-body">
            <ModalText data-testid="containers-modal-text">
              {t("unknownPart.text")}
            </ModalText>
          </ModalBody>
        </Modal>
      )}
    </Container>
  );
};
