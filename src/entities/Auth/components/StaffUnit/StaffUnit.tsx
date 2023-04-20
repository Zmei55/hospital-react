import { useHandleChange } from "entities/Auth";
import {
  useAppNavigate,
  Spinner,
  Button as BackBtn,
  Button as LoginBtn,
  Icon,
} from "shared";

import {
  SubTitle,
  StationsList,
  StationListItem,
  RadioBtn,
  BtnContainer,
} from "./StaffUnit.styled";

export function StaffUnit() {
  const { formState, handleChange, isLoading } = useHandleChange();
  const [navigate] = useAppNavigate();

  const isEmptyLoginForm = formState.station === "";

  return (
    <>
      <SubTitle>Wählen Sie eine Personaleinheit</SubTitle>

      <StationsList>
        <StationListItem>
          <RadioBtn
            type="radio"
            name="station"
            value="chirurgisch"
            onChange={handleChange}
          />
          chirurgische Station, Krankenschwester
        </StationListItem>
        <StationListItem>
          <RadioBtn
            type="radio"
            name="station"
            value="neurologisch"
            onChange={handleChange}
          />
          neurologische Station, Krankenschwester
        </StationListItem>
        <StationListItem>
          <RadioBtn
            type="radio"
            name="station"
            value="traumatologisch"
            onChange={handleChange}
          />
          traumatologische Station, Krankenschwester
        </StationListItem>
      </StationsList>

      <BtnContainer>
        <BackBtn
          width="172px"
          height="72px"
          background="grey"
          color="#524E6B"
          onClick={() => navigate("/")}
        >
          <Icon icon="caret-left-bold" size={24} color="text-body" />
          Zurück
        </BackBtn>
        <LoginBtn
          type="submit"
          width="172px"
          height="72px"
          background="blue"
          disabled={isEmptyLoginForm}
        >
          {isLoading ? <Spinner /> : "Log In"}
        </LoginBtn>
      </BtnContainer>
    </>
  );
}
