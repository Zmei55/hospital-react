import { useHandleChange } from "entities/Auth";
import {
  useAppNavigate,
  Spinner,
  InputEl as RadioBtn,
  Button as BackBtn,
  Button as LoginBtn,
  Icon,
} from "shared";

import {
  SubTitle,
  StationsList,
  StationListItem,
  StationLabel,
  StationText,
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
          <StationLabel>
            <RadioBtn
              width="48px"
              height="48px"
              type="radio"
              name="station"
              value="chirurgisch"
              onChange={handleChange}
              marginRight="8px"
            />
            <StationText>chirurgische Station, Krankenschwester</StationText>
          </StationLabel>
        </StationListItem>

        <StationListItem>
          <StationLabel>
            <RadioBtn
              width="48px"
              height="48px"
              type="radio"
              name="station"
              value="neurologisch"
              onChange={handleChange}
              marginRight="8px"
            />
            <StationText>neurologische Station, Krankenschwester</StationText>
          </StationLabel>
        </StationListItem>

        <StationListItem>
          <StationLabel>
            <RadioBtn
              width="48px"
              height="48px"
              type="radio"
              name="station"
              value="traumatologisch"
              onChange={handleChange}
              marginRight="8px"
            />
            <StationText>
              traumatologische Station, Krankenschwester
            </StationText>
          </StationLabel>
        </StationListItem>
      </StationsList>

      <BtnContainer>
        <BackBtn
          id="backToFormBtn"
          width="172px"
          height="72px"
          background="grey"
          color="#524E6B"
          onClick={() => navigate("/")}
        >
          <Icon icon="caret-left-bold" size={24} color="grey" />
          Zurück
        </BackBtn>

        <LoginBtn
          id="loginBtn"
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
