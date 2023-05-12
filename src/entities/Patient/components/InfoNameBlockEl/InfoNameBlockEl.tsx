import { useHandleInfoActive, useClearPatient } from "entities/Patient";
import {
  useAppSelector,
  Button as InfoBtn,
  Button as ClearBtn,
  Icon,
} from "shared";

import { NameBlock, Name } from "./InfoNameBlockEl.styled";

interface IInfoNameBlock {}

export const InfoNameBlockEl: React.FC<IInfoNameBlock> = () => {
  const { name: patientName } = useAppSelector(state => state.patients.patient);
  const { clearPatient } = useClearPatient();
  const { isInfoActive, handleInfoActive } = useHandleInfoActive();

  return (
    <NameBlock>
      <InfoBtn
        id="morePatInfoBtn"
        width="48px"
        height="48px"
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

      <Name>{patientName}</Name>

      <ClearBtn
        id="clearPatInfo"
        width="48px"
        height="48px"
        background="transparent"
        name="ClearButton"
        onClick={clearPatient}
      >
        <Icon icon="cross-bold" size={24} color="red" />
      </ClearBtn>
    </NameBlock>
  );
};
