import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { AllTheProviders } from "shared/test-utils";

describe("App component", () => {
  it("App renders", () => {
    render(
      <AllTheProviders route="">
        <App />
      </AllTheProviders>
    );
    expect(screen.getByTestId("app-container")).toBeInTheDocument();
  });
});
