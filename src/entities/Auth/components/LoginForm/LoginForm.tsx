import { Link, useOutletContext } from "react-router-dom";
import { ILogOutletContext } from "entities/Auth";

import {
  SubTitle,
  Container,
  Label,
  Input,
  Button,
  IconArrowRight,
} from "./LoginForm.styled";

export function LoginForm() {
  const { formState, setFormState } = useOutletContext<ILogOutletContext>();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => setFormState(prev => ({ ...prev, [name]: value }));

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
            placeholder="Login"
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          <Input
            name="password"
            type="password"
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
