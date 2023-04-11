import { useHandleChange } from "entities/Auth";
import { useAppNavigate, AcceptBlueBtn } from "shared";

import {
  SubTitle,
  Container,
  Label,
  Input,
  IconArrowRight,
} from "./LoginForm.styled";

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
          <Input
            name="logName"
            type="text"
            value={formState.logName}
            placeholder="Login"
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          <Input
            name="password"
            type="password"
            value={formState.password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </Label>
      </Container>

      <AcceptBlueBtn
        type="button"
        width="368px"
        height="72px"
        disabled={isEmptyLoginForm}
        onClick={() => navigate("/station")}
      >
        Weiter
        <IconArrowRight />
      </AcceptBlueBtn>
    </>
  );
}
