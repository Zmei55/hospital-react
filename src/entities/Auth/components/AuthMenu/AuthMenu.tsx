import { Outlet } from "react-router-dom";
import { useLogIn } from "entities/Auth";
import { Modal, Button as AcceptBtn } from "shared";

import { Section, Form, Title, ErrorTitle } from "./AuthMenu.styled";

export const AuthMenu: React.FC = () => {
  const {
    formState,
    setFormState,
    isLoading,
    isError,
    handleSubmit,
    errorModalClose,
  } = useLogIn();

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <Title>Autorisierung</Title>
        <Outlet context={{ formState, setFormState, isLoading }} />
      </Form>

      {isError && (
        <Modal width="500px" height="400px">
          <ErrorTitle>Benutzerdaten wurden falsch eingegeben</ErrorTitle>
          <AcceptBtn
            id="errorLoginBtn"
            width="172px"
            height="72px"
            background="blue"
            onClick={errorModalClose}
          >
            Ok
          </AcceptBtn>
        </Modal>
      )}
    </Section>
  );
};
