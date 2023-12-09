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
  useSexTranslation,
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
  const { sexTranslation } = useSexTranslation();
  let info = null;

  if (patient) info = patientInfo(patient);

  return (
    <>
      {info && (
        <>
          <NameBlock className="patient-info-name-block">
            <InfoBtn
              id="morePatInfoBtn"
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
                <Icon icon="caret-double-up-bold" size={24} color="grey" />
              ) : (
                <Icon icon="caret-double-down-bold" size={24} color="grey" />
              )}
            </InfoBtn>

            <Name>{info.name}</Name>

            <ClearBtn
              id="clearPatInfo"
              background="transparent"
              style={{
                width: "48px",
                height: "48px",
              }}
              name="ClearButton"
              onClick={clearPatient}
            >
              <Icon icon="cross-bold" size={24} color="red" />
            </ClearBtn>
          </NameBlock>

          <BasicInformationBox className="patient-info-primary-block">
            <InfoBox>
              <InfoHeader>{t("patient.dateOfBirth")}</InfoHeader>
              <InfoBody>{info.dateOfBirth}</InfoBody>
            </InfoBox>

            <InfoBox>
              <InfoHeader>{t("patient.sex")}</InfoHeader>
              <InfoBody>{sexTranslation(info.gender)}</InfoBody>
            </InfoBox>

            <InfoBox>
              <InfoHeader>{t("patient.cardNumber")}</InfoHeader>
              <InfoBody>{info.cardNumber}</InfoBody>
            </InfoBox>

            <InfoBox>
              <InfoHeader>{t("patient.phone")}</InfoHeader>
              <InfoBody>{info.phoneNumber}</InfoBody>
            </InfoBox>

            <InfoBox>
              <InfoHeader>{t("patient.email")}</InfoHeader>
              <InfoBody>{info.email}</InfoBody>
            </InfoBox>
          </BasicInformationBox>

          {isInfoActive && (
            <BackgroundInformationBox className="patient-info-secondary-block">
              <InfoBox>
                <InfoHeader>{t("patient.identityDocument")}</InfoHeader>
                <InfoBody>{info.identityDocument}</InfoBody>
              </InfoBox>

              <InfoBox>
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
