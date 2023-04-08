import { Link } from "react-router-dom";
import { useHandleChange } from "entities/Auth";

import {
  SubTitle,
  Container,
  Label,
  Input,
  Button,
  IconArrowRight,
} from "./LoginForm.styled";

export function LoginForm() {
  const [formState, handleChange] = useHandleChange();

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

      <Link to="/station">
        <Button type="button" disabled={isEmptyLoginForm}>
          Weiter
          <IconArrowRight />
        </Button>
      </Link>
    </>
  );
}
