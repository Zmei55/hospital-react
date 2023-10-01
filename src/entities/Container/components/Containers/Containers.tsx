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
    <Container>
      <Title>{t("container.title")}</Title>
      <ModalBtn
        type="button"
        disabled={detailsList.length === 0}
        onClick={toggleContainersModal}
      >
        <Icon icon="test-tube" size={48} />
        {servicesList.length === 0 && detailsList.length === 0 && (
          <ButtonTitle>{t("container.containerBtnIsDisabled_V1")}</ButtonTitle>
        )}
        {servicesList.length !== 0 && detailsList.length === 0 && (
          <ButtonTitle>{t("container.containerBtnIsDisabled_V2")}</ButtonTitle>
        )}
        {servicesList.length !== 0 && detailsList.length !== 0 && (
          <ButtonTitle>{t("container.containerBtnIsActive")}</ButtonTitle>
        )}
      </ModalBtn>

      {showContainersModal && (
        <Modal onClose={() => toggleContainersModal()}>
          <ModalHeader>
            <ModalTitle>{t("container.containerBtnIsActive")}</ModalTitle>
            <CloseBtn
              id="closeModalSerBtn"
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

          <ModalBody>
            <ModalText>{t("UnknownPart.text")}</ModalText>
          </ModalBody>
        </Modal>
      )}
    </Container>
  );
};
