import {
  ServiceModalEl,
  useToggleServicesModal,
  LaborModalEl,
  useToggleLaborModal,
} from "entities/Service";
import { useAppSelector, Button as AddBtn, Button as LaborBtn } from "shared";

import { Container, Title } from "./TitleBoxEl.styled";

interface ITitleBox {}

export const TitleBoxEl: React.FC<ITitleBox> = () => {
  const services = useAppSelector(state => state.services.services);
  const { showServiceModal, toggleServicesModal } = useToggleServicesModal();
  const { showLaborModal, toggleLaborModal } = useToggleLaborModal();

  return (
    <Container>
      <Title>Services</Title>

      {services.length > 0 && (
        <>
          <AddBtn
            id="addToSelectedSerBtn"
            background="grey"
            style={{
              height: "48px",
              paddingRight: "24px",
              paddingLeft: "24px",
              marginRight: "24px",
            }}
            onClick={toggleServicesModal}
          >
            Ergänzen
          </AddBtn>

          <LaborBtn
            id="selectLabor"
            background="grey"
            style={{
              height: "48px",
              paddingRight: "24px",
              paddingLeft: "24px",
            }}
            onClick={toggleLaborModal}
          >
            Wahl des Labors
          </LaborBtn>
        </>
      )}

      {showServiceModal && <ServiceModalEl />}

      {showLaborModal && <LaborModalEl toggleLaborModal={toggleLaborModal} />}
    </Container>
  );
};
