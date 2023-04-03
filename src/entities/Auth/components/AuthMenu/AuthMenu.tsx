import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLogInMutation, loginSuccess } from "entities/Auth/redux";
import { Outlet } from "react-router-dom";

import { Section, Form, Title } from "./AuthMenu.styled";

type TFormState = { logName: string; password: string; station: string };

export const AuthMenu: React.FC = () => {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLogInMutation();
  const [formState, setFormState] = useState<TFormState>({
    logName: "",
    password: "",
    station: "",
  });

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const user = await login(formState).unwrap();
      dispatch(loginSuccess(user)); // диспатчим форму через authSlice в api
      setFormState({
        logName: "",
        password: "",
        station: "",
      });
    } catch (error) {
      console.log("ERROR authFormSubmit");
    }
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <Title>Autorisierung</Title>
        <Outlet context={{ formState, setFormState, isLoading }} />
      </Form>
    </Section>
  );
};
