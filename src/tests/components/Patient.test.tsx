import { render, screen } from "@testing-library/react";
import { allTheProviders } from "tests/utils";
import userEvent from "@testing-library/user-event";
import { Request } from "entities/Request";
import { SearchModalEl } from "entities/Patient";
import { patientListMocks } from "tests/mocks";

describe("Patient component", () => {
  it("Patient container renders", () => {
    render(allTheProviders(<Request />, "/request"));

    expect(screen.getByTestId("patient-container")).toBeInTheDocument();
  });
});

describe("Patient find component", () => {
  it("Patient find renders", () => {
    render(allTheProviders(<Request />, "/request"));

    expect(screen.getByTestId("patient-find-container")).toBeInTheDocument();
  });

  it("Patient find button renders", () => {
    render(allTheProviders(<Request />, "/request"));

    const findBtn = screen.getByTestId("patient-find-btn");
    expect(findBtn).toBeInTheDocument();
  });

  it("Patient find button text renders", () => {
    render(allTheProviders(<Request />, "/request"));

    expect(screen.getByText(/select a patient/i)).toBeInTheDocument();
  });
});

describe("Patient find modal component", () => {
  it("Patient find modal renders", () => {
    render(
      allTheProviders(
        <div>
          <Request />
          <SearchModalEl />
        </div>,
        "/request"
      )
    );

    const findBtn = screen.getByTestId("patient-find-btn");
    userEvent.click(findBtn);
    expect(screen.getByTestId("patient-search")).toBeInTheDocument();

    expect(screen.getByTestId("patient-search-header")).toBeInTheDocument();
    expect(screen.getByTestId("reset-search-patient-btn")).toBeInTheDocument();
    expect(screen.getByTestId("find-search-patient-btn")).toBeInTheDocument();
    expect(screen.getByTestId("close-search-patient-btn")).toBeInTheDocument();

    expect(screen.getByTestId("patient-search-body")).toBeInTheDocument();
    expect(screen.getByTestId("patient-search-form")).toBeInTheDocument();
    expect(screen.getByTestId("patient-search-name-input")).toBeInTheDocument();
    expect(
      screen.getByTestId("patient-search-birthday-input")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("patient-search-card-number-input")
    ).toBeInTheDocument();
  });

  it("Patient list find", () => {
    render(allTheProviders(<SearchModalEl />, "/request"));

    expect(screen.getByTestId("patient-search")).toBeInTheDocument();

    const patientsFindBtn = screen.getByTestId("find-search-patient-btn");
    const nameInput = screen.getByTestId("patient-search-name-input");

    expect(nameInput).toBeInTheDocument();
    userEvent.type(nameInput, "weber");
    userEvent.click(patientsFindBtn);
    // screen.debug();
    // expect(screen.getByTestId("patient-search-list")).toBeInTheDocument();
  });
});
