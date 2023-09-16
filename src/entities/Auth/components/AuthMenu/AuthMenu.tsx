import { useForm } from "react-hook-form";
import { useLogIn, ISingInState } from "entities/Auth";
import {
  Modal,
  Button as AcceptBtn,
  Button as SignInBtn,
  Icon,
  Spinner,
} from "shared";

import {
  Section,
  Title,
  SubTitle,
  Form,
  Container,
  Label,
  Input,
  ErrorTitle,
} from "./AuthMenu.styled";
import React from "react";

export const AuthMenu: React.FC = () => {
  const { isLoading, isError, handleSignInSubmit, errorModalClose } =
    useLogIn();

  const {
    register,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm<ISingInState>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const isEmptyLoginForm =
    dirtyFields.username === undefined || dirtyFields.password === undefined;

  return (
    <Section>
      <Form onSubmit={handleSubmit(handleSignInSubmit)}>
        <Title>Autorisierung</Title>

        <SubTitle>Geben Sie Login und Password ein</SubTitle>

        <Container>
          <Label>
            <Input
              {...register("username", {
                required: "You did not enter a username",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
              })}
              placeholder="Username"
              required
            />
          </Label>

          <Label>
            <Input
              type="password"
              {...register("password", {
                required: "You did not enter a password",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              placeholder="Password"
              required
            />
          </Label>
        </Container>

        <SignInBtn
          id="signInBtn"
          type="submit"
          style={{ width: "368px", height: "72px" }}
          background="blue"
          disabled={isEmptyLoginForm}
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              Einloggen
              <Icon icon="caret-right-bold" size={24} color="white" />
            </>
          )}
        </SignInBtn>
      </Form>

      {isError && (
        <Modal width="500px" height="400px">
          <ErrorTitle>Benutzerdaten wurden falsch eingegeben</ErrorTitle>
          <AcceptBtn
            id="errorLoginBtn"
            background="blue"
            style={{
              height: "72px",
              paddingRight: "44px",
              paddingLeft: "44px",
            }}
            onClick={errorModalClose}
          >
            Ok
          </AcceptBtn>
        </Modal>
      )}
    </Section>
  );
};
