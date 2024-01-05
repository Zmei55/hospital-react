import { useTranslation } from "react-i18next";
import {
  useHandleInfoActive,
  useClearPatient,
  patientInfo,
} from "entities/Patient";
import {
  useAppSelector,
  Button as InfoBtn,
  Button as ClearBtn,
  Icon,
} from "shared";

import {
  BasicInformationBox,
  BackgroundInformationBox,
  NameBlock,
  Name,
  InfoBox,
  InfoHeader,
  InfoBody,
} from "./InfoEl.styled";

interface IInfo {}

export const InfoEl: React.FC<IInfo> = () => {
  const patient = useAppSelector(state => state.patients.patient);
  const { clearPatient } = useClearPatient();
  const { isInfoActive, handleInfoActive } = useHandleInfoActive();
  const { t } = useTranslation();
  let info = null;

  if (patient) info = patientInfo(patient);

  return (
    <>
      {info && (
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

            <Name data-testid="patient-info-name">{info.name}</Name>

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
              <InfoBody>{info.dateOfBirth}</InfoBody>
            </InfoBox>

            <InfoBox data-testid="patient-info-primary-infobox-gender">
              <InfoHeader>{t("patient.gender.gender")}</InfoHeader>
              <InfoBody>
                {t("patient.gender.gender", { context: `${info.gender}` })}
              </InfoBody>
            </InfoBox>

            <InfoBox data-testid="patient-info-primary-infobox-card-number">
              <InfoHeader>{t("patient.cardNumber")}</InfoHeader>
              <InfoBody>{info.cardNumber}</InfoBody>
            </InfoBox>

            <InfoBox data-testid="patient-info-primary-infobox-phone">
              <InfoHeader>{t("patient.phone")}</InfoHeader>
              <InfoBody>{info.phoneNumber}</InfoBody>
            </InfoBox>

            <InfoBox data-testid="patient-info-primary-infobox-email">
              <InfoHeader>{t("patient.email")}</InfoHeader>
              <InfoBody>{info.email}</InfoBody>
            </InfoBox>
          </BasicInformationBox>

          {isInfoActive && (
            <BackgroundInformationBox data-testid="patient-info-secondary-block">
              <InfoBox data-testid="patient-info-secondary-infobox-identity-document">
                <InfoHeader>{t("patient.identityDocument")}</InfoHeader>
                <InfoBody>{info.identityDocument}</InfoBody>
              </InfoBox>

              <InfoBox data-testid="patient-info-secondary-infobox-residence-address">
                <InfoHeader>{t("patient.residenceAddress")}</InfoHeader>
                <InfoBody>{info.residence}</InfoBody>
              </InfoBox>
            </BackgroundInformationBox>
          )}
        </>
      )}
    </>
  );
};
