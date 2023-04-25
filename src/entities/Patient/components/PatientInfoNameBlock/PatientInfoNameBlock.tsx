import { Button as InfoBtn, Button as ClearBtn, Icon } from "shared";

import { NameBlock, Name } from "./PatientInfoNameBlock.styled";

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
          <Icon icon="caret-double-up-bold" size={24} color="grey" />
        ) : (
          <Icon icon="caret-double-down-bold" size={24} color="grey" />
        )}
      </InfoBtn>

      <Name>{patientName}</Name>

      <ClearBtn
        width="48px"
        height="48px"
        background="transparent"
        onClick={clearPatient}
      >
        <Icon icon="cross-bold" size={24} color="red" />
      </ClearBtn>
    </NameBlock>
  );
};
