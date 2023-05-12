import { ServiceModalEl, useToggleServicesModal } from "entities/Services";
import {
  useAppSelector,
  Button as AddBtn,
  // Button as LaborBtn
} from "shared";

import { Container, Title, ButtonsBox } from "./TitleBoxEl.styled";

interface ITitleBox {}

export const TitleBoxEl: React.FC<ITitleBox> = () => {
  const servicesList = useAppSelector(state => state.services.services);
  const patient = useAppSelector(state => state.patients.patient);
  const showModal = useAppSelector(state => state.services.modal);
  const { toggleModal } = useToggleServicesModal();

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
            onClick={toggleModal}
          >
            Ergänzen
          </AddBtn>

          {/* Кнопка выбора лаборатории */}
          {/* <LaborBtn
            id="selectLabor"
            width="217px"
            height="48px"
            background="grey"
            // onClick={handleClearList}
          >
            Stornieren
          </LaborBtn> */}
        </ButtonsBox>
      )}

      {showModal && <ServiceModalEl />}
    </Container>
  );
};
