import { Outlet } from "react-router-dom";
import { useLogIn, initialFormAuthState } from "entities/Auth";

import { Section, Form, Title } from "./AuthMenu.styled";

export const AuthMenu: React.FC = () => {
  const { formState, setFormState, isLoading, handleSubmit } =
    useLogIn(initialFormAuthState);

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <Title>Autorisierung</Title>
        <Outlet context={{ formState, setFormState, isLoading }} />
      </Form>
    </Section>
  );
};
