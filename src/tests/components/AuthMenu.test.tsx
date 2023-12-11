import { render, screen } from "@testing-library/react";
import { allTheProviders } from "tests/utils";
import userEvent from "@testing-library/user-event";
import { AuthMenu } from "entities/Auth";
import * as authHooks from "entities/Auth/hooks";

jest.mock("entities/Auth/hooks");

const mockedUseLogIn = jest.spyOn(authHooks, "useLogIn");

describe("AuthMenu component", () => {
  it("AuthMenu renders", () => {
    mockedUseLogIn.mockReturnValue({
      isLoading: false,
      isError: false,
      handleSignInSubmit: jest.fn(),
      errorModalClose: jest.fn(),
    });

    const { container } = render(allTheProviders(<AuthMenu />));

    expect(screen.getByTestId("auth-page")).toBeInTheDocument();
    expect(screen.getByText(/authorization/i)).toBeInTheDocument();
    expect(screen.getByText(/enter login and password/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("inputs renders", () => {
    mockedUseLogIn.mockReturnValue({
      isLoading: false,
      isError: false,
      handleSignInSubmit: jest.fn(),
      errorModalClose: jest.fn(),
    });

    render(allTheProviders(<AuthMenu />));

    expect(screen.getByRole("textbox")).toBeInTheDocument(); // нашли инпут по роли
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument(); // нашли инпут с Placeholder "Username"
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument(); // нашли инпут с Placeholder "Password"
  });

  it("user sign-in", async () => {
    mockedUseLogIn.mockReturnValue({
      isLoading: false,
      isError: false,
      handleSignInSubmit: jest.fn(),
      errorModalClose: jest.fn(),
    });

    render(allTheProviders(<AuthMenu />));

    const signInBtn = screen.getByTestId("sign-in-btn"); // кнопка входа
    expect(signInBtn).toBeInTheDocument(); // подтвердили наличие кнопки входа

    await userEvent.type(screen.getByPlaceholderText("Username"), "test"); // написали в инпут "test"
    expect(screen.getByPlaceholderText("Username")).toHaveValue("test"); // подтвердили значение инпут "test"
    await userEvent.type(screen.getByTestId("auth-password-input"), "test123");
    expect(screen.getByTestId("auth-password-input")).toHaveValue("test123");

    userEvent.click(signInBtn);
  });

  it("AuthMenu ErrorModal renders", async () => {
    mockedUseLogIn.mockReturnValue({
      isLoading: false,
      isError: true,
      handleSignInSubmit: jest.fn(),
      errorModalClose: jest.fn(),
    });

    const { container } = render(allTheProviders(<AuthMenu />));

    expect(screen.getByTestId("backdrop")).toBeInTheDocument();
    expect(screen.getByTestId("modal-content")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("Login button spinner renders", () => {
    mockedUseLogIn.mockReturnValue({
      isLoading: true,
      isError: false,
      handleSignInSubmit: jest.fn(),
      errorModalClose: jest.fn(),
    });

    render(allTheProviders(<AuthMenu />));

    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
});
