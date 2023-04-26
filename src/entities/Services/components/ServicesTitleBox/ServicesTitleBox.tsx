import { ServicesSearchModal, useToggleServicesModal } from "entities/Services";
import { useAppSelector, Button as AddBtn, Button as LaborBtn } from "shared";

import { TitleBox, Title, ButtonsBox } from "./ServicesTitleBox.styled";

interface IServicesTitleBox {}

export const ServicesTitleBox: React.FC<IServicesTitleBox> = () => {
  const servicesList = useAppSelector(state => state.services.services);
  const { showModal, toggleModal } = useToggleServicesModal();

  return (
    <TitleBox>
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

      {showModal && <ServicesSearchModal />}
    </TitleBox>
  );
};
