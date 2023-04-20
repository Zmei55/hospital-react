import { Button as InfoBtn, Button as PatientClearBtn, Icon } from "shared";

import { NameBlock, PatientName } from "./PatientInfoNameBlock.styled";

interface IPatientInfoNameBlock {
  patientName: string;
  handleInfoActive: React.MouseEventHandler<HTMLButtonElement>;
  isInfoActive: boolean;
  clearPatient: () => void;
}

export const PatientInfoNameBlock: React.FC<IPatientInfoNameBlock> = ({
  patientName,
  handleInfoActive,
  isInfoActive,
  clearPatient,
}) => {
  return (
    <NameBlock>
      <InfoBtn
        width="48px"
        height="48px"
        background="transparent"
        onClick={handleInfoActive}
      >
        {isInfoActive ? (
          <Icon icon="caret-double-up-bold" size={24} color="text-body" />
        ) : (
          <Icon icon="caret-double-down-bold" size={24} color="text-body" />
        )}
      </InfoBtn>

      <PatientName>{patientName}</PatientName>

      <PatientClearBtn
        width="48px"
        height="48px"
        background="transparent"
        onClick={clearPatient}
      >
        <Icon icon="cross-bold" size={24} color="red" />
      </PatientClearBtn>
    </NameBlock>
  );
};
