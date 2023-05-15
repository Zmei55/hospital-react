import { ServiceModalEl, useToggleServicesModal } from "entities/Services";
import { LaborModalEl } from "entities/Labor";
import {
  useAppSelector,
  Button as AddBtn,
  Button as LaborBtn,
  useToggle,
} from "shared";

import { Container, Title, ButtonsBox } from "./TitleBoxEl.styled";

interface ITitleBox {}

export const TitleBoxEl: React.FC<ITitleBox> = () => {
  const servicesList = useAppSelector(state => state.services.services);
  const patient = useAppSelector(state => state.patients.patient);
  const showServiceModalState = useAppSelector(
    state => state.services.modalService
  );
  const { toggleServicesModal } = useToggleServicesModal();
  const [showLaborModal, toggleLaborModal] = useToggle(false);

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

      {showServiceModalState && <ServiceModalEl />}

      {showLaborModal && <LaborModalEl toggleLaborModal={toggleLaborModal} />}
    </Container>
  );
};
