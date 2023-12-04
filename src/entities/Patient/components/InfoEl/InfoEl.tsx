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
  const {
    dateOfBirth,
    gender,
    cardNumber,
    phoneNumber,
    email,
    identityDocument,
    residence,
  } = patientInfo(patient);

  return (
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

        <Name>{patient.name}</Name>

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
          <InfoBody>{dateOfBirth}</InfoBody>
        </InfoBox>

        <InfoBox>
          <InfoHeader>{t("patient.sex")}</InfoHeader>
          <InfoBody>{sexTranslation(gender)}</InfoBody>
        </InfoBox>

        <InfoBox>
          <InfoHeader>{t("patient.cardNumber")}</InfoHeader>
          <InfoBody>{cardNumber}</InfoBody>
        </InfoBox>

        <InfoBox>
          <InfoHeader>{t("patient.phone")}</InfoHeader>
          <InfoBody>{phoneNumber}</InfoBody>
        </InfoBox>

        <InfoBox>
          <InfoHeader>{t("patient.email")}</InfoHeader>
          <InfoBody>{email}</InfoBody>
        </InfoBox>
      </BasicInformationBox>

      {isInfoActive && (
        <BackgroundInformationBox className="patient-info-secondary-block">
          <InfoBox>
            <InfoHeader>{t("patient.identityDocument")}</InfoHeader>
            <InfoBody>{identityDocument}</InfoBody>
          </InfoBox>

          <InfoBox>
            <InfoHeader>{t("patient.residenceAddress")}</InfoHeader>
            <InfoBody>{residence}</InfoBody>
          </InfoBox>
        </BackgroundInformationBox>
      )}
    </>
  );
};
