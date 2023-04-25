import { PatientInfoNameBlock, PatientInfoBox } from "entities/Patient";

import {} from "./PatientInfo.styled";

interface IPatientInfo {}

export const PatientInfo: React.FC<IPatientInfo> = () => {
  return (
    <>
      <PatientInfoNameBlock />

      <PatientInfoBox />
    </>
  );
};
