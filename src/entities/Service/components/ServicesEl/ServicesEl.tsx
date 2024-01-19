import { useTranslation } from "react-i18next";
import {
  ServiceModalEl,
  LaborModalEl,
  useServiceDelete,
  useToggleServicesModal,
  useToggleLaborModal,
} from "entities/Service";
import {
  useAppSelector,
  MenuButton,
  Button as AddBtn,
  Button as LaborBtn,
  Button as DeleteBtn,
  Icon,
} from "shared";

import {
  Container,
  TitleContainer,
  Title,
  ButtonsBox,
  List,
  Item,
  ServiceNameBox,
  ServiceNameHeader,
  Code,
  ServiceName,
  LaborName,
} from "./ServicesEl.styled";

export const ServicesEl: React.FC = () => {
  const services = useAppSelector(state => state.services.services);
  const patient = useAppSelector(state => state.patients.patient);
  const laborList = useAppSelector(state => state.services.labors);
  const detailsList = useAppSelector(state => state.services.details);
  const { t } = useTranslation();
  const { removeService } = useServiceDelete();
  const { showServiceModal, toggleServicesModal } = useToggleServicesModal();
  const { showLaborModal, toggleLaborModal } = useToggleLaborModal();

  return (
    <Container data-testid="services-container">
      <TitleContainer data-testid="services-header">
        <Title>{t("service.title")}</Title>

        {services && (
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
      </TitleContainer>

      {showServiceModal && (
        <ServiceModalEl toggleServicesModal={toggleServicesModal} />
      )}

      {showLaborModal && <LaborModalEl toggleLaborModal={toggleLaborModal} />}

      {!services && (
        <MenuButton
          type="button"
          text={
            !patient
              ? t("service.service.service", { context: "BtnIsDisabled" })
              : t("service.service.service", { context: "BtnIsActive" })
          }
          icon="list-plus"
          onClick={() => toggleServicesModal()}
          disabled={!patient}
          style={{ height: "100%" }}
        />
      )}

      {services && (
        <List data-testid="services-info-list">
          {services.map(service => (
            <Item key={service._id} data-testid="services-info-listitem">
              <DeleteBtn
                data-testid="delete-service-info-btn"
                background="transparent"
                style={{
                  width: "52px",
                  height: "52px",
                  border: "none",
                  marginRight: "24px",
                }}
                onClick={() => removeService(service._id)}
              >
                <Icon icon="trash" size={48} color="red" />
              </DeleteBtn>

              <ServiceNameBox data-testid="services-info-box">
                <ServiceNameHeader data-testid="services-info-box-header">
                  <Code data-testid="services-info-box-service-code">
                    {service.code}
                  </Code>

                  {detailsList && laborList && (
                    <>
                      {detailsList.map(
                        detail =>
                          detail.serviceId === service._id.toString() &&
                          laborList.map(
                            labor =>
                              labor._id.toString() === detail.laborId && (
                                <LaborName
                                  key={labor._id}
                                  data-testid="services-info-box-labor-name"
                                >
                                  {labor.name}
                                </LaborName>
                              )
                          )
                      )}
                    </>
                  )}
                </ServiceNameHeader>

                <ServiceName data-testid="services-info-box-service-name">
                  {service.name}
                </ServiceName>
              </ServiceNameBox>
            </Item>
          ))}
        </List>
      )}
    </Container>
  );
};
