import { render, screen } from "@testing-library/react";
import { allTheProviders } from "tests/utils";
import userEvent from "@testing-library/user-event";
import { Request } from "entities/Request";
import { PatientEl, SearchModalEl } from "entities/Patient";
import * as sharedHooks from "shared/hooks";
// import { patientMocks, patientListMocks } from "tests/mocks";
import * as patientHooks from "entities/Patient";

jest.mock("shared/hooks");
jest.mock("entities/Patient/hooks");

const mockedUseSelector = jest.spyOn(sharedHooks, "useAppSelector");
const mockedUseClearPatient = jest.spyOn(patientHooks, "useClearPatient");
const mockedUseToggle = jest.spyOn(patientHooks, "useTogglePatientsModal");
const mockedUsePatientList = jest.spyOn(patientHooks, "usePatientListFind");
const mockedUseHandleInfo = jest.spyOn(patientHooks, "useHandleInfoActive");

describe("Patient component", () => {
  it("Patient container renders", () => {
    const stateSelectors = {
      patients: {
        patient: null,
      },
    };
    // @ts-ignore
    mockedUseSelector.mockImplementation(state => state(stateSelectors));
    mockedUseToggle.mockReturnValue({ togglePatientsModal: jest.fn() });
    mockedUseClearPatient.mockReturnValue({ clearPatient: jest.fn() });
    mockedUseHandleInfo.mockReturnValue({
      isInfoActive: false,
      handleInfoActive: jest.fn(),
    });
    mockedUsePatientList.mockReturnValue({
      patientList: null,
      handlePatientListFind: jest.fn(),
      isLoading: false,
      isError: false,
      resetPatients: jest.fn(),
    });

    render(allTheProviders(<PatientEl />, "/request"));

    expect(screen.getByTestId("patient-container")).toBeInTheDocument();
  });
});

xdescribe("Patient find component", () => {
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

xdescribe("Patient find modal component", () => {
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
