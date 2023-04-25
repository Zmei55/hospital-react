import { useAppSelector } from "shared";
import {
  PatientInfoNameBlock,
  PatientInfoBox,
  useHandleInfoActive,
  useClearPatient,
  patientInfo,
  clearInitialPatient,
  IPatient,
} from "entities/Patient";

import {} from "./PatientInfo.styled";

interface IPatientInfo {
  patient: IPatient;
}

export const PatientInfo: React.FC<IPatientInfo> = ({ patient }) => {
  const [clearPatient] = useClearPatient(clearInitialPatient);
  const [handleInfoActive] = useHandleInfoActive();
  const isActive = useAppSelector(state => state.patients.isActivePatientInfo);
  const {
    name,
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
      <PatientInfoNameBlock
        patientName={name}
        handleInfoActive={handleInfoActive}
        isInfoActive={isActive}
        clearPatient={clearPatient}
      />

      <PatientInfoBox
        dateOfBirth={dateOfBirth}
        gender={gender}
        cardNumber={cardNumber}
        phoneNumber={phoneNumber}
        email={email}
        identityDocument={identityDocument}
        residence={residence}
        isInfoActive={isActive}
      />
    </>
  );
};
