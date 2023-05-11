import { useHandleChange } from "entities/Auth";
import { useAppNavigate, InputEl, Button as NextBtn, Icon } from "shared";

import { SubTitle, Container, Label } from "./LoginForm.styled";

export function LoginForm() {
  const { formState, handleChange } = useHandleChange();
  const [navigate] = useAppNavigate();

  const isEmptyLoginForm =
    formState.logName === "" || formState.password === "";

  return (
    <>
      <SubTitle>Geben Sie Login und Password ein</SubTitle>

      <Container>
        <Label>
          <InputEl
            name="logName"
            width="368px"
            height="72px"
            value={formState.logName}
            placeholder="Login"
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          <InputEl
            name="password"
            type="password"
            width="368px"
            height="72px"
            value={formState.password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </Label>
      </Container>

      <NextBtn
        id="nextLoginBtn"
        width="368px"
        height="72px"
        background="blue"
        disabled={isEmptyLoginForm}
        onClick={() => navigate("/station")}
      >
        Weiter
        <Icon icon="caret-right-bold" size={24} color="white" />
      </NextBtn>
    </>
  );
}
