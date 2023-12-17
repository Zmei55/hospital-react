import { useTranslation } from "react-i18next";
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
  const services = useAppSelector(state => state.services.services);
  const { showServiceModal, toggleServicesModal } = useToggleServicesModal();
  const { showLaborModal, toggleLaborModal } = useToggleLaborModal();
  const { t } = useTranslation();

  return (
    <Container data-testid="services-header">
      <Title>{t("service.title")}</Title>

      {services && services.length > 0 && (
        <ButtonsBox data-testid="services-header-buttons-box">
          <AddBtn
            data-testid="add-to-selected-service-btn"
            background="grey"
            style={{
              height: "48px",
              paddingRight: "24px",
              paddingLeft: "24px",
              marginRight: "24px",
            }}
            onClick={toggleServicesModal}
          >
            {t("shared.button.add")}
          </AddBtn>

          <LaborBtn
            data-testid="select-labor"
            background="grey"
            style={{
              height: "48px",
              paddingRight: "24px",
              paddingLeft: "24px",
            }}
            onClick={toggleLaborModal}
          >
            {t("service.implementer")}
          </LaborBtn>
        </ButtonsBox>
      )}

      {showServiceModal && <ServiceModalEl />}

      {showLaborModal && <LaborModalEl toggleLaborModal={toggleLaborModal} />}
    </Container>
  );
};
