import { SearchModalEl, useToggleServicesModal } from "entities/Services";
import { useAppSelector, Button as AddBtn, Button as LaborBtn } from "shared";

import { Container, Title, ButtonsBox } from "./TitleBox.styled";

interface ITitleBox {}

export const TitleBoxEl: React.FC<ITitleBox> = () => {
  const servicesList = useAppSelector(state => state.services.services);
  const { showModal, toggleModal } = useToggleServicesModal();

  return (
    <Container>
      <Title>Services</Title>

      {servicesList.length > 0 && (
        <ButtonsBox>
          <AddBtn
            width="217px"
            height="48px"
            background="grey"
            onClick={toggleModal}
          >
            Ergänzen
          </AddBtn>

          {/* Кнопка выбора лаборатории */}
          {/* <LaborBtn
            width="217px"
            height="48px"
            background="grey"
            // onClick={handleClearList}
          >
            Stornieren
          </LaborBtn> */}
        </ButtonsBox>
      )}

      {showModal && <SearchModalEl />}
    </Container>
  );
};
