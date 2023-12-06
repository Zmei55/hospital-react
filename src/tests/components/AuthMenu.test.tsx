import { render, screen } from "@testing-library/react";
import { allTheProviders } from "tests/utils";
import userEvent from "@testing-library/user-event";
import { AuthMenu } from "entities/Auth";

describe("AuthMenu component", () => {
  it("AuthMenu renders", () => {
    render(allTheProviders(<AuthMenu />, "/"));

    expect(screen.getByTestId("auth-page")).toBeInTheDocument();
    expect(screen.getByText(/authorization/i)).toBeInTheDocument();
    expect(screen.getByText(/enter login and password/i)).toBeInTheDocument();
  });

  it("inputs renders", () => {
    render(allTheProviders(<AuthMenu />, "/"));

    expect(screen.getByRole("textbox")).toBeInTheDocument(); // нашли инпут по роли
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument(); // нашли инпут с Placeholder "Username"
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument(); // нашли инпут с Placeholder "Password"
  });

  it("user sign-in", async () => {
    render(allTheProviders(<AuthMenu />, "/"));

    const signInBtn = screen.getByTestId("signInBtn"); // кнопка входа
    expect(signInBtn).toBeInTheDocument(); // подтвердили наличие кнопки входа

    userEvent.type(screen.getByTestId("auth-username-input"), "test"); // написали в инпут "qwe"
    expect(screen.getByTestId("auth-username-input")).toHaveValue("test"); // подтвердили значение инпут "qwe"
    userEvent.type(screen.getByTestId("auth-password-input"), "test123");
    expect(screen.getByTestId("auth-password-input")).toHaveValue("test123");

    // userEvent.click(signInBtn);
    // await expect(screen.getByTestId("desktop-page")).toBeInTheDocument();
  });
});
