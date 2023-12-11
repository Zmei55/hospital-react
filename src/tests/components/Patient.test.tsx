import { render, screen, cleanup } from "@testing-library/react";
import { allTheProviders, patientMocks, patientListMocks } from "tests";
import * as sharedHooks from "shared/hooks";
import * as patientHooks from "entities/Patient/hooks";
import userEvent from "@testing-library/user-event";
import { PatientEl, SearchModalEl } from "entities/Patient";

afterEach(() => {
  cleanup();
});

jest.mock("shared/hooks");
jest.mock("entities/Patient/hooks");

const mockedUseSelector = jest.spyOn(sharedHooks, "useAppSelector");
const mockedUseClearPatient = jest.spyOn(patientHooks, "useClearPatient");
const mockedUseToggle = jest.spyOn(patientHooks, "useTogglePatientsModal");
const mockedUsePatientList = jest.spyOn(patientHooks, "usePatientListFind");
const mockedUseChoosePatient = jest.spyOn(patientHooks, "useChoosePatient");
const mockedUseHandleInfo = jest.spyOn(patientHooks, "useHandleInfoActive");

describe("Patient component", () => {
  it("Patient container renders", () => {
    mockedUseToggle.mockReturnValue({ togglePatientsModal: jest.fn() });

    const { container } = render(allTheProviders(<PatientEl />));

    expect(screen.getByTestId("patient-container")).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});

describe("Patient find component", () => {
  it("Patient find renders", () => {
    mockedUseToggle.mockReturnValue({ togglePatientsModal: jest.fn() });

    render(allTheProviders(<PatientEl />));

    expect(screen.getByTestId("patient-find-container")).toBeInTheDocument();
  });

  it("Patient find button renders", () => {
    mockedUseToggle.mockReturnValue({ togglePatientsModal: jest.fn() });

    render(allTheProviders(<PatientEl />));

    const findBtn = screen.getByTestId("patient-find-btn");
    expect(findBtn).toBeInTheDocument();
    expect(screen.getByText(/select a patient/i)).toBeInTheDocument();
  });
});

describe("Patient find-modal component", () => {
  it("Patient find-modal not renders", () => {
    const stateSelectors = {
      patients: {
        patient: null,
        modalPatient: false,
      },
    };
    // @ts-ignore
    mockedUseSelector.mockImplementation(state => state(stateSelectors));
    mockedUseToggle.mockReturnValue({ togglePatientsModal: jest.fn() });
    mockedUsePatientList.mockReturnValue({
      patientList: null,
      handlePatientListFind: jest.fn(),
      isLoading: false,
      isError: false,
      resetPatients: jest.fn(),
    });

    const { container } = render(allTheProviders(<PatientEl />));

    expect(screen.queryByTestId("patient-search")).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("Patient find-modal renders", () => {
    const stateSelectors = {
      patients: {
        patient: null,
        modalPatient: true,
      },
    };
    // @ts-ignore
    mockedUseSelector.mockImplementation(state => state(stateSelectors));
    mockedUseToggle.mockReturnValue({ togglePatientsModal: jest.fn() });
    mockedUsePatientList.mockReturnValue({
      patientList: null,
      handlePatientListFind: jest.fn(),
      isLoading: false,
      isError: false,
      resetPatients: jest.fn(),
    });
    mockedUseChoosePatient.mockReturnValue({ choosePatient: jest.fn() });

    const { container } = render(allTheProviders(<PatientEl />));

    expect(screen.getByTestId("patient-search")).toBeInTheDocument();

    expect(screen.getByTestId("patient-search-header")).toBeInTheDocument();
    expect(screen.getByTestId("patient-search-title")).toBeInTheDocument();
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

    expect(container).toMatchSnapshot();
  });

  it("Patient list find", async () => {
    const handlePatientList = jest.fn();
    const stateSelectors = {
      patients: {
        patient: null,
        modalPatient: true,
      },
    };
    // @ts-ignore
    mockedUseSelector.mockImplementation(state => state(stateSelectors));
    mockedUseToggle.mockReturnValue({ togglePatientsModal: jest.fn() });
    mockedUsePatientList.mockReturnValue({
      patientList: patientListMocks,
      handlePatientListFind: handlePatientList,
      isLoading: false,
      isError: false,
      resetPatients: jest.fn(),
    });
    mockedUseChoosePatient.mockReturnValue({ choosePatient: jest.fn() });

    const { container } = render(allTheProviders(<SearchModalEl />));

    expect(screen.getByTestId("patient-search")).toBeInTheDocument();

    const patientsFindBtn = screen.getByTestId("find-search-patient-btn");

    await userEvent.click(patientsFindBtn);
    expect(handlePatientList).toHaveBeenCalledTimes(1);

    expect(screen.getByTestId("patient-search-list")).toBeInTheDocument();
    expect(
      screen.getByTestId("patient-search-list-header")
    ).toBeInTheDocument();
    expect(screen.getByText(/first name and last name/i)).toBeInTheDocument();
    expect(screen.getByText(/date of birth/i)).toBeInTheDocument();
    expect(screen.getByText(/card number/i)).toBeInTheDocument();
    expect(screen.getByTestId("patient-search-list-body")).toBeInTheDocument();

    const listitem = screen.getAllByTestId(
      "patient-search-listitem"
    )[0] as HTMLAnchorElement;
    expect(listitem).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});

describe("Patient Info component", () => {
  it("Patient Info renders - shortened", () => {
    const stateSelectors = {
      patients: {
        patient: patientMocks,
        modalPatient: false,
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

    render(allTheProviders(<PatientEl />));

    expect(screen.getByTestId("patient-container")).toBeInTheDocument();
    expect(screen.getByTestId("patient-info-name-block")).toBeInTheDocument();
    expect(screen.getByTestId("more-patient-info-btn")).toBeInTheDocument();
    expect(screen.getByTestId("patient-info-name")).toBeInTheDocument();
    expect(screen.getByTestId("clear-patient-info")).toBeInTheDocument();
    expect(
      screen.getByTestId("patient-info-primary-block")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("patient-info-primary-infobox-birthday")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("patient-info-primary-infobox-gender")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("patient-info-primary-infobox-card-number")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("patient-info-primary-infobox-phone")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("patient-info-primary-infobox-email")
    ).toBeInTheDocument();
  });

  it("Patient Info renders - full", () => {
    const stateSelectors = {
      patients: {
        patient: patientMocks,
      },
    };
    // @ts-ignore
    mockedUseSelector.mockImplementation(state => state(stateSelectors));
    mockedUseToggle.mockReturnValue({ togglePatientsModal: jest.fn() });
    mockedUseClearPatient.mockReturnValue({ clearPatient: jest.fn() });
    mockedUseHandleInfo.mockReturnValue({
      isInfoActive: true,
      handleInfoActive: jest.fn(),
    });

    const { container } = render(allTheProviders(<PatientEl />));

    expect(screen.getByTestId("patient-container")).toBeInTheDocument();
    expect(screen.getByTestId("patient-info-name-block")).toBeInTheDocument();
    expect(
      screen.getByTestId("patient-info-secondary-block")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("patient-info-secondary-infobox-identity-document")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("patient-info-secondary-infobox-residence-address")
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
