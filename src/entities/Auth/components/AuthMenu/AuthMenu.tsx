import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useLogIn, ISingInState } from "entities/Auth";
import {
  Modal,
  InputEl,
  Button as AcceptBtn,
  Button as SignInBtn,
  Icon,
  Spinner,
} from "shared";

import {
  Container,
  Title,
  SubTitle,
  Form,
  InputsContainer,
  Label,
  InputError,
  ErrorTitle,
} from "./AuthMenu.styled";
import React from "react";

export const AuthMenu: React.FC = () => {
  const { isLoading, isError, handleSignInSubmit, errorModalClose } =
    useLogIn();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { dirtyFields, errors },
  } = useForm<ISingInState>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const isEmptyLoginForm =
    dirtyFields.username === undefined || dirtyFields.password === undefined;

  return (
    <Container data-testid="auth-page">
      <Form data-testid="auth-form" onSubmit={handleSubmit(handleSignInSubmit)}>
        <Title data-testid="auth-title">{t("auth.title")}</Title>

        <SubTitle data-testid="auth-subtitle">{t("auth.text")}</SubTitle>

        <InputsContainer data-testid="auth-inputs-container">
          <Label data-testid="auth-username-label">
            <InputEl
              {...register("username", {
                required: "You did not enter a username",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
                value: getValues().username,
              })}
              data-testid="auth-username-input"
              style={{ width: "368px" }}
              placeholder={t("auth.loginInput")}
              required
            />
            {errors.username && (
              <InputError>{errors.username.message}</InputError>
            )}
          </Label>

          <Label data-testid="auth-password-label">
            <InputEl
              type="password"
              {...register("password", {
                required: "You did not enter a password",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
                value: getValues().password,
              })}
              data-testid="auth-password-input"
              style={{ width: "368px" }}
              placeholder={t("auth.passwordInput")}
              required
            />
            {errors.password && (
              <InputError>{errors.password.message}</InputError>
            )}
          </Label>
        </InputsContainer>

        <SignInBtn
          data-testid="sign-in-btn"
          type="submit"
          style={{ width: "368px", height: "72px" }}
          background="blue"
          disabled={isEmptyLoginForm}
        >
          {isLoading ? (
            <Spinner data-testid="spinner" />
          ) : (
            <>
              {t("shared.button.signIn")}
              <Icon icon="caret-right-bold" size={24} color="white" />
            </>
          )}
        </SignInBtn>
      </Form>

      {isError && (
        <Modal data-testid="login-error-modal" onClose={errorModalClose}>
          <ErrorTitle>{t("auth.authError")}</ErrorTitle>
          <AcceptBtn
            data-testid="errorLoginBtn"
            background="blue"
            style={{
              height: "72px",
              paddingRight: "44px",
              paddingLeft: "44px",
              marginBottom: "56px",
            }}
            onClick={errorModalClose}
          >
            Ok
          </AcceptBtn>
        </Modal>
      )}
    </Container>
  );
};
