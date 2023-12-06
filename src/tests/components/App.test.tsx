import { render, screen } from "@testing-library/react";
import { App } from "app/components/App";
import { allTheProviders } from "tests/utils";

describe("App component", () => {
  it("App renders", () => {
    render(allTheProviders(<App />, ""));

    expect(screen.getByTestId("app")).toBeInTheDocument();
  });
});
