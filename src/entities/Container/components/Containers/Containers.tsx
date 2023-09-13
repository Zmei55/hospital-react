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

  return (
    <Container>
      <Title>Containers</Title>
      <ModalBtn
        type="button"
        disabled={detailsList.length === 0}
        onClick={toggleContainersModal}
      >
        <Icon icon="test-tube" size={48} />
        {servicesList.length === 0 && detailsList.length === 0 && (
          <ButtonTitle>
            Sie können Container berechnen, nachdem Sie Dienste hinzugefügt und
            eine Labore ausgewählt haben
          </ButtonTitle>
        )}
        {servicesList.length !== 0 && detailsList.length === 0 && (
          <ButtonTitle>
            Sie können Container berechnen, nachdem Sie eine Labore ausgewählt
            haben
          </ButtonTitle>
        )}
        {servicesList.length !== 0 && detailsList.length !== 0 && (
          <ButtonTitle>Sie können Container berechnen</ButtonTitle>
        )}
      </ModalBtn>

      {showContainersModal && (
        <Modal
          width="1050px"
          height="595px"
          onClose={() => toggleContainersModal()}
        >
          <ModalHeader>
            <ModalTitle>Container berechnen</ModalTitle>
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
            <ModalText>
              Leider weiß ich nicht, wie dieser Block funktioniert, daher bitte
              ich mich zu verstehen und zu verzeihen.
            </ModalText>
          </ModalBody>
        </Modal>
      )}
    </Container>
  );
};
