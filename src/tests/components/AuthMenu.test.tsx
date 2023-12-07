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

    await userEvent.type(screen.getByPlaceholderText("Username"), "test"); // написали в инпут "test"
    expect(screen.getByPlaceholderText("Username")).toHaveValue("test"); // подтвердили значение инпут "test"
    await userEvent.type(screen.getByTestId("auth-password-input"), "test123");
    expect(screen.getByTestId("auth-password-input")).toHaveValue("test123");

    // await userEvent.click(signInBtn);
    // expect(screen.getByTestId("desktop-page")).toBeInTheDocument();
  });
});
