import { useTranslation } from "react-i18next";
import {
  SearchModalEl,
  useTogglePatientsModal,
  useHandleInfoActive,
  useClearPatient,
} from "entities/Patient";
import {
  useAppSelector,
  MenuButton,
  Modal,
  Button as InfoBtn,
  Button as ClearBtn,
  Icon,
  showDate,
} from "shared";

import {
  Container,
  BasicInformationBox,
  BackgroundInformationBox,
  NameBlock,
  Name,
  InfoBox,
  InfoHeader,
  InfoBody,
} from "./PatientEl.styled";

export function PatientEl() {
  const patient = useAppSelector(state => state.patients.patient);
  const showModal = useAppSelector(state => state.patients.modalPatient);
  const { t } = useTranslation();
  const { togglePatientsModal } = useTogglePatientsModal();
  const { clearPatient } = useClearPatient();
  const { isInfoActive, handleInfoActive } = useHandleInfoActive();

  return (
    <Container data-testid="patient-container">
      {showModal && (
        <Modal data-testid="patient-find-modal" onClose={togglePatientsModal}>
          <SearchModalEl />
        </Modal>
      )}

      {!patient ? (
        <MenuButton
          type="button"
          text={t("patient.selectPatientBtn")}
          icon="user-plus"
          onClick={togglePatientsModal}
          style={{ width: "100%", height: "228px" }}
        />
      ) : (
        <>
          <NameBlock data-testid="patient-info-name-block">
            <InfoBtn
              data-testid="more-patient-info-btn"
              style={{
                width: "48px",
                height: "48px",
                marginRight: "24px",
              }}
              background="transparent"
              name={"InfoButton"}
              onClick={handleInfoActive}
            >
              {isInfoActive ? (
                <Icon
                  icon="caret-double-up-bold"
                  data-testid="caret-double-up-bold"
                  size={24}
                  color="grey"
                />
              ) : (
                <Icon
                  icon="caret-double-down-bold"
                  data-testid="caret-double-down-bold"
                  size={24}
                  color="grey"
                />
              )}
            </InfoBtn>

            <Name data-testid="patient-info-name">{patient.name}</Name>

            <ClearBtn
              data-testid="clear-patient-info"
              background="transparent"
              style={{
                width: "48px",
                height: "48px",
              }}
              name="ClearButton"
              onClick={clearPatient}
            >
              <Icon
                icon="cross-bold"
                data-testid="cross-bold"
                size={24}
                color="red"
              />
            </ClearBtn>
          </NameBlock>

          <BasicInformationBox data-testid="patient-info-primary-block">
            <InfoBox data-testid="patient-info-primary-infobox-birthday">
              <InfoHeader>{t("patient.dateOfBirth")}</InfoHeader>
              {patient.birthDate && (
                <InfoBody>{showDate(patient.birthDate)}</InfoBody>
              )}
            </InfoBox>

            <InfoBox data-testid="patient-info-primary-infobox-gender">
              <InfoHeader>{t("patient.gender.gender")}</InfoHeader>
              <InfoBody>
                {t("patient.gender.gender", { context: `${patient.gender}` })}
              </InfoBody>
            </InfoBox>

            <InfoBox data-testid="patient-info-primary-infobox-card-number">
              <InfoHeader>{t("patient.cardNumber")}</InfoHeader>
              <InfoBody>{patient.cardNumber}</InfoBody>
            </InfoBox>

            <InfoBox data-testid="patient-info-primary-infobox-phone">
              <InfoHeader>{t("patient.phone")}</InfoHeader>
              <InfoBody>{patient.phoneNumber}</InfoBody>
            </InfoBox>

            <InfoBox data-testid="patient-info-primary-infobox-email">
              <InfoHeader>{t("patient.email")}</InfoHeader>
              <InfoBody>{patient.email}</InfoBody>
            </InfoBox>
          </BasicInformationBox>

          {isInfoActive && (
            <BackgroundInformationBox data-testid="patient-info-secondary-block">
              <InfoBox data-testid="patient-info-secondary-infobox-identity-document">
                <InfoHeader>{t("patient.identityDocument")}</InfoHeader>
                <InfoBody>{patient.identityDocument}</InfoBody>
              </InfoBox>

              <InfoBox data-testid="patient-info-secondary-infobox-residence-address">
                <InfoHeader>{t("patient.residenceAddress")}</InfoHeader>
                {patient.address && (
                  <InfoBody>{`
                  ${patient.address.street} ${patient.address.houseNumber}, ${patient.address.postcode} ${patient.address.city}
                `}</InfoBody>
                )}
              </InfoBox>
            </BackgroundInformationBox>
          )}
        </>
      )}
    </Container>
  );
}
