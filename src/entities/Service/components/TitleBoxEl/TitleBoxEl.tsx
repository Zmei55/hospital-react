import {
  ServiceModalEl,
  useToggleServicesModal,
  LaborModalEl,
  useToggleLaborModal,
} from "entities/Service";
import { useAppSelector, Button as AddBtn, Button as LaborBtn } from "shared";

import { Container, Title, ButtonsBox } from "./TitleBoxEl.styled";

interface ITitleBox {}

export const TitleBoxEl: React.FC<ITitleBox> = () => {
  const patient = useAppSelector(state => state.patients.patient);
  const servicesList = useAppSelector(state => state.services.selectedServices);
  const { showServiceModal, toggleServicesModal } = useToggleServicesModal();
  const { showLaborModal, toggleLaborModal } = useToggleLaborModal();

  return (
    <Container>
      <Title>Services</Title>

      {servicesList.length > 0 && patient._id !== "" && (
        <ButtonsBox>
          <AddBtn
            id="addToSelectedSerBtn"
            width="217px"
            height="48px"
            background="grey"
            marginRight="24px"
            onClick={toggleServicesModal}
          >
            Ergänzen
          </AddBtn>

          <LaborBtn
            id="selectLabor"
            width="254px"
            height="48px"
            background="grey"
            onClick={toggleLaborModal}
          >
            Wahl des Labors
          </LaborBtn>
        </ButtonsBox>
      )}

      {showServiceModal && <ServiceModalEl />}

      {showLaborModal && <LaborModalEl toggleLaborModal={toggleLaborModal} />}
    </Container>
  );
};
