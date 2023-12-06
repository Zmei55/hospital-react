import { render, screen } from "@testing-library/react";
import { allTheProviders } from "tests/utils";
import { Desktop } from "entities/Desktop";

describe("Desktop component", () => {
  it("Desktop renders", () => {
    render(allTheProviders(<Desktop />, "/desktop"));

    expect(screen.getByTestId("desktop-page")).toBeInTheDocument();
  });

  it("All components renders", () => {
    render(allTheProviders(<Desktop />, "/desktop"));

    const newRequestBtn = screen.getByTestId("newRequestBtn");
    const findRequestBtn = screen.getByTestId("findRequestBtn");
    const findContainersBtn = screen.getByTestId("findContainersBtn");
    const documentsBtn = screen.getByTestId("documentsBtn");

    expect(newRequestBtn).toBeInTheDocument();
    expect(screen.getByText(/create a request/i)).toBeInTheDocument();

    expect(findRequestBtn).toBeInTheDocument();
    expect(screen.getByText(/find a request/i)).toBeInTheDocument();

    expect(findContainersBtn).toBeInTheDocument();
    expect(screen.getByText(/find a container/i)).toBeInTheDocument();

    expect(documentsBtn).toBeInTheDocument();
    expect(screen.getByText(/documents/i)).toBeInTheDocument();
  });
});
