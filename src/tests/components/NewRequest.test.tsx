import { render, screen } from "@testing-library/react";
import { allTheProviders } from "tests/utils";
import { Request } from "entities/Request";

describe("NewRequest component", () => {
  it("NewRequest renders", () => {
    render(allTheProviders(<Request />, "/request"));

    expect(screen.getByTestId("new-request")).toBeInTheDocument();
  });

  it("NewRequest header renders", () => {
    render(allTheProviders(<Request />, "/request"));

    const newRequestHeader = screen.getByTestId("new-request-header");
    const saveRequestBtn = screen.getByTestId("save-new-request-btn");
    const closeRequestBtn = screen.getByTestId("close-new-request-btn");

    expect(newRequestHeader).toBeInTheDocument();
    expect(screen.getByText(/new request/i)).toBeInTheDocument();
    expect(saveRequestBtn).toBeInTheDocument();
    expect(closeRequestBtn).toBeInTheDocument();
  });

  it("NewRequest body renders", () => {
    render(allTheProviders(<Request />, "/request"));

    expect(screen.getByTestId("new-request-body")).toBeInTheDocument();
    expect(screen.getByTestId("find-patient-btn")).toBeInTheDocument();
    expect(screen.getByText(/select a patient/i)).toBeInTheDocument();

    expect(
      screen.getByTestId("new-request-secondary-container")
    ).toBeInTheDocument();

    expect(screen.getByTestId("services-container")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByTestId("add-services-btn")).toBeInTheDocument();
    expect(
      screen.getByText(/services can be added after selecting a patient/i)
    ).toBeInTheDocument();

    expect(screen.getByTestId("containers-container")).toBeInTheDocument();
    expect(screen.getByText("Containers")).toBeInTheDocument();
    expect(screen.getByTestId("add-services-btn")).toBeInTheDocument();
    expect(
      screen.getByText(
        /you can calculate containers after you have added services and selected a labs/i
      )
    ).toBeInTheDocument();
  });
});
