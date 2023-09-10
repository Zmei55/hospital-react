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
  const patient = useAppSelector(state => state.patients.patient);
  const { clearPatient } = useClearPatient();
  const { isInfoActive, handleInfoActive } = useHandleInfoActive();

  return (
    <NameBlock>
      <InfoBtn
        id="morePatInfoBtn"
        style={{
          width: "48px",
          height: "48px",
          marginRight: "24px",
        }}
        // width="48px"
        // height="48px"
        background="transparent"
        name={"InfoButton"}
        // marginRight="24px"
        onClick={handleInfoActive}
      >
        {isInfoActive ? (
          <Icon icon="caret-double-up-bold" size={24} color="grey" />
        ) : (
          <Icon icon="caret-double-down-bold" size={24} color="grey" />
        )}
      </InfoBtn>

      <Name>
        {patient.firstName} {patient.lastName}
      </Name>

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
  );
};
