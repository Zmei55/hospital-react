import { render, screen, cleanup } from "@testing-library/react";
import {
  allTheProviders,
  patientMocks,
  serviceListMocks,
  selectedServiceListMocks,
  laborListMocks,
  detailListMocks,
} from "tests";
import * as sharedHooks from "shared/hooks";
import * as serviceHooks from "entities/Service/hooks";
import { ServicesEl } from "entities/Service";

afterEach(() => {
  cleanup();
});

jest.mock("shared/hooks");
jest.mock("entities/Service/hooks");

const mockedUseSelector = jest.spyOn(sharedHooks, "useAppSelector");
const mockedUseServiceToggle = jest.spyOn(
  serviceHooks,
  "useToggleServicesModal"
);
const mockedUseLaborToggle = jest.spyOn(serviceHooks, "useToggleLaborModal");
const mockedUseHandleServicesForm = jest.spyOn(
  serviceHooks,
  "useHandleServicesForm"
);
const mockedUseServiceAdd = jest.spyOn(serviceHooks, "useServiceAdd");
const mockedUseServiceDelete = jest.spyOn(serviceHooks, "useServiceDelete");
const mockedUseSelectedServiceDelete = jest.spyOn(
  serviceHooks,
  "useSelectedServiceDelete"
);
const mockedUseSelectedServiceListSave = jest.spyOn(
  serviceHooks,
  "useSelectedServiceListSave"
);
const mockedUseSelectedServiceListClear = jest.spyOn(
  serviceHooks,
  "useSelectedServiceListClear"
);
const mockedUseHandleLaborChange = jest.spyOn(
  serviceHooks,
  "useHandleLaborChange"
);

describe("Services component", () => {
  it("Services renders", () => {
    mockedUseServiceToggle.mockReturnValue({
      showServiceModal: false,
      toggleServicesModal: jest.fn(),
    });
    mockedUseLaborToggle.mockReturnValue({
      showLaborModal: false,
      toggleLaborModal: jest.fn(),
    });

    render(allTheProviders(<ServicesEl />));

    expect(screen.getByTestId("services-container")).toBeInTheDocument();
  });
});

describe("Services Search component", () => {
  beforeEach(() => {
    mockedUseServiceAdd.mockReturnValue({ addService: jest.fn() });
    mockedUseSelectedServiceDelete.mockReturnValue({
      removeSelectedService: jest.fn(),
    });
    mockedUseSelectedServiceListSave.mockReturnValue({
      saveSelectedList: jest.fn(),
    });
    mockedUseSelectedServiceListClear.mockReturnValue({
      clearSelectedList: jest.fn(),
    });
  });

  it("Services Search renders (without header-buttons-box)", () => {
    mockedUseServiceToggle.mockReturnValue({
      showServiceModal: false,
      toggleServicesModal: jest.fn(),
    });
    mockedUseLaborToggle.mockReturnValue({
      showLaborModal: false,
      toggleLaborModal: jest.fn(),
    });

    const { container } = render(allTheProviders(<ServicesEl />));

    expect(screen.getByTestId("services-container")).toBeInTheDocument();
    expect(screen.getByTestId("services-header")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByTestId("add-services-btn")).toBeInTheDocument();
    expect(
      screen.getByText("Services can be added after selecting a patient")
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId("services-header-buttons-box")
    ).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  describe("Services Search-modal component", () => {
    beforeEach(() => {
      mockedUseServiceToggle.mockReturnValue({
        showServiceModal: true,
        toggleServicesModal: jest.fn(),
      });
      mockedUseLaborToggle.mockReturnValue({
        showLaborModal: false,
        toggleLaborModal: jest.fn(),
      });
    });

    it("Services Search-modal renders", () => {
      const stateSelectors = {
        patients: {
          patient: patientMocks,
        },
        services: {
          services: null,
          labors: null,
          details: null,
          selectedServices: null,
        },
      };
      // @ts-ignore
      mockedUseSelector.mockImplementation(state => state(stateSelectors));
      mockedUseHandleServicesForm.mockReturnValue({
        handleServicesForm: jest.fn(),
        filteredServicesList: null,
        isLoading: false,
        isError: false,
      });

      render(allTheProviders(<ServicesEl />));

      expect(screen.getByTestId("services-container")).toBeInTheDocument();
      expect(screen.getByTestId("backdrop")).toBeInTheDocument();
      expect(screen.getByTestId("modal-content")).toBeInTheDocument();
      expect(screen.getByTestId("services-modal-header")).toBeInTheDocument();
      expect(
        screen.queryByTestId("services-header-buttons-box")
      ).not.toBeInTheDocument();
      expect(screen.getByText("Add service")).toBeInTheDocument();
      expect(
        screen.getByTestId("close-modal-services-btn")
      ).toBeInTheDocument();
      expect(screen.getByTestId("services-modal-body")).toBeInTheDocument();
      expect(screen.getByTestId("services-modal-filter")).toBeInTheDocument();
      expect(
        screen.getByTestId("services-modal-filter-form")
      ).toBeInTheDocument();
      expect(
        screen.getByTestId("services-modal-filter-input")
      ).toBeInTheDocument();
      expect(screen.getByTestId("find-service-btn")).toBeInTheDocument();
      expect(screen.queryByTestId("spinner")).not.toBeInTheDocument();
      expect(screen.getByTestId("find-service-btn-text")).toBeInTheDocument();
      expect(screen.getByTestId("services-modal-selected")).toBeInTheDocument();
      expect(
        screen.getByTestId("services-modal-selected-title")
      ).toBeInTheDocument();
      expect(screen.getByText("Selected services")).toBeInTheDocument();
      expect(screen.getByTestId("services-modal-buttons")).toBeInTheDocument();
      expect(
        screen.getByTestId("reset-selected-services-btn")
      ).toBeInTheDocument();
      expect(
        screen.getByTestId("save-selected-services-btn")
      ).toBeInTheDocument();
    });

    it("Services Search-modal renders with spinner loading filtered list", () => {
      const stateSelectors = {
        patients: {
          patient: patientMocks,
        },
        services: {
          services: null,
          labors: null,
          details: null,
          selectedServices: null,
        },
      };
      // @ts-ignore
      mockedUseSelector.mockImplementation(state => state(stateSelectors));
      mockedUseHandleServicesForm.mockReturnValue({
        handleServicesForm: jest.fn(),
        filteredServicesList: null,
        isLoading: true,
        isError: false,
      });

      render(allTheProviders(<ServicesEl />));

      expect(screen.getByTestId("services-container")).toBeInTheDocument();
      expect(screen.getByTestId("services-modal-filter")).toBeInTheDocument();
      expect(screen.getByTestId("find-service-btn")).toBeInTheDocument();
      expect(
        screen.queryByTestId("find-service-btn-text")
      ).not.toBeInTheDocument();
      expect(screen.getByTestId("spinner")).toBeInTheDocument();
    });

    it("Services Search-modal renders with filtered list", () => {
      const stateSelectors = {
        patients: {
          patient: patientMocks,
        },
        services: {
          services: null,
          labors: null,
          details: null,
          selectedServices: null,
        },
      };
      // @ts-ignore
      mockedUseSelector.mockImplementation(state => state(stateSelectors));
      mockedUseHandleServicesForm.mockReturnValue({
        handleServicesForm: jest.fn(),
        filteredServicesList: serviceListMocks,
        isLoading: false,
        isError: false,
      });

      const { container } = render(allTheProviders(<ServicesEl />));

      expect(screen.getByTestId("services-container")).toBeInTheDocument();
      expect(screen.getByTestId("services-modal-filter")).toBeInTheDocument();
      expect(
        screen.getByTestId("services-modal-filter-list")
      ).toBeInTheDocument();

      const listitem = screen.getAllByTestId(
        "services-modal-filter-listitem"
      )[0] as HTMLAnchorElement;
      expect(listitem).toBeInTheDocument();

      const nameBox = screen.getAllByTestId(
        "services-modal-filter-name-box"
      )[0] as HTMLAnchorElement;
      expect(nameBox).toBeInTheDocument();

      const code = screen.getAllByTestId(
        "services-modal-filter-code"
      )[0] as HTMLAnchorElement;
      expect(code).toBeInTheDocument();

      const name = screen.getAllByTestId(
        "services-modal-filter-name"
      )[0] as HTMLAnchorElement;
      expect(name).toBeInTheDocument();

      const addBtn = screen.getAllByTestId(
        "add-service-btn"
      )[0] as HTMLAnchorElement;
      expect(addBtn).toBeInTheDocument();

      const addText = screen.getAllByText("Add")[0] as HTMLAnchorElement;
      expect(addText).toBeInTheDocument();

      expect(container).toMatchSnapshot();
    });

    it("Services Search-modal renders with selected list", () => {
      const stateSelectors = {
        patients: {
          patient: patientMocks,
        },
        services: {
          services: null,
          labors: null,
          details: null,
          selectedServices: selectedServiceListMocks,
        },
      };
      // @ts-ignore
      mockedUseSelector.mockImplementation(state => state(stateSelectors));
      mockedUseHandleServicesForm.mockReturnValue({
        handleServicesForm: jest.fn(),
        filteredServicesList: serviceListMocks,
        isLoading: false,
        isError: false,
      });

      const { container } = render(allTheProviders(<ServicesEl />));

      expect(screen.getByTestId("services-container")).toBeInTheDocument();
      expect(screen.getByTestId("services-modal-selected")).toBeInTheDocument();
      expect(
        screen.getByTestId("services-modal-selected-title")
      ).toBeInTheDocument();
      expect(
        screen.getByTestId("services-modal-selected-list")
      ).toBeInTheDocument();

      const listitem = screen.getAllByTestId(
        "services-modal-selected-listitem"
      )[0] as HTMLAnchorElement;
      expect(listitem).toBeInTheDocument();

      const deleteBtn = screen.getAllByTestId(
        "delete-selected-service-btn"
      )[0] as HTMLAnchorElement;
      expect(deleteBtn).toBeInTheDocument();

      const nameBox = screen.getAllByTestId(
        "services-modal-selected-name-box"
      )[0] as HTMLAnchorElement;
      expect(nameBox).toBeInTheDocument();

      const code = screen.getAllByTestId(
        "services-modal-selected-code"
      )[0] as HTMLAnchorElement;
      expect(code).toBeInTheDocument();

      const name = screen.getAllByTestId(
        "services-modal-selected-name"
      )[0] as HTMLAnchorElement;
      expect(name).toBeInTheDocument();

      expect(screen.getByText("Enzyme")).toBeInTheDocument();

      expect(screen.getByTestId("services-modal-buttons")).toBeInTheDocument();
      expect(
        screen.getByTestId("reset-selected-services-btn")
      ).toBeInTheDocument();
      expect(screen.getByText("Abort")).toBeInTheDocument();
      expect(
        screen.getByTestId("save-selected-services-btn")
      ).toBeInTheDocument();
      expect(screen.getByText("Save and close")).toBeInTheDocument();

      expect(container).toMatchSnapshot();
    });
  });

  describe("Services Labor-modal component", () => {
    beforeEach(() => {
      mockedUseServiceToggle.mockReturnValue({
        showServiceModal: false,
        toggleServicesModal: jest.fn(),
      });
      mockedUseLaborToggle.mockReturnValue({
        showLaborModal: true,
        toggleLaborModal: jest.fn(),
      });
    });

    it("Services Labor-modal renders", () => {
      const stateSelectors = {
        patients: {
          patient: patientMocks,
        },
        services: {
          services: selectedServiceListMocks,
          labors: laborListMocks,
          details: null,
          selectedServices: null,
        },
      };
      // @ts-ignore
      mockedUseSelector.mockImplementation(state => state(stateSelectors));
      mockedUseHandleServicesForm.mockReturnValue({
        handleServicesForm: jest.fn(),
        filteredServicesList: serviceListMocks,
        isLoading: false,
        isError: false,
      });
      mockedUseHandleLaborChange.mockReturnValue({
        handleLaborChange: jest.fn(),
        saveDetails: jest.fn(),
        detailsState: null,
      });
      mockedUseServiceDelete.mockReturnValue({ removeService: jest.fn() });

      const { container } = render(allTheProviders(<ServicesEl />));

      expect(screen.getByTestId("services-container")).toBeInTheDocument();
      expect(screen.getByTestId("modal-content")).toBeInTheDocument();
      expect(screen.getByTestId("labors-modal-header")).toBeInTheDocument();
      expect(
        screen.getByTestId("labors-modal-header-title")
      ).toBeInTheDocument();
      expect(screen.getByTestId("close-labor-modal-btn")).toBeInTheDocument();
      expect(screen.getByTestId("labors-modal-form")).toBeInTheDocument();
      expect(screen.getByTestId("labors-modal-table")).toBeInTheDocument();
      expect(screen.getByTestId("labors-modal-table-head")).toBeInTheDocument();
      expect(screen.getByText("Service")).toBeInTheDocument();

      const laborName = screen.getAllByTestId(
        "labors-table-head-name"
      )[0] as HTMLAnchorElement;
      expect(laborName).toBeInTheDocument();

      expect(screen.getByTestId("labors-modal-table-body")).toBeInTheDocument();

      const tableRow = screen.getAllByTestId(
        "labors-table-body-row"
      )[0] as HTMLAnchorElement;
      expect(tableRow).toBeInTheDocument();

      const serviceBox = screen.getAllByTestId(
        "labors-table-body-service-box"
      )[0] as HTMLAnchorElement;
      expect(serviceBox).toBeInTheDocument();

      const serviceCode = screen.getAllByTestId(
        "labors-table-body-service-code"
      )[0] as HTMLAnchorElement;
      expect(serviceCode).toBeInTheDocument();

      const serviceName = screen.getAllByTestId(
        "labors-table-body-service-name"
      )[0] as HTMLAnchorElement;
      expect(serviceName).toBeInTheDocument();

      const radioButton = screen.getAllByTestId(
        "labors-table-body-radio-button"
      )[0] as HTMLAnchorElement;
      expect(radioButton).toBeInTheDocument();

      const radioInput = screen.getAllByTestId(
        "labors-table-body-radio-input"
      )[0] as HTMLAnchorElement;
      expect(radioInput).toBeInTheDocument();

      expect(
        screen.getByTestId("save-selected-labors-btn")
      ).toBeInTheDocument();
      expect(screen.getByText("Save and close")).toBeInTheDocument();

      expect(container).toMatchSnapshot();
    });
  });

  describe("Services Info component", () => {
    beforeEach(() => {
      mockedUseServiceToggle.mockReturnValue({
        showServiceModal: false,
        toggleServicesModal: jest.fn(),
      });
      mockedUseLaborToggle.mockReturnValue({
        showLaborModal: false,
        toggleLaborModal: jest.fn(),
      });
    });

    it("Services Labor-modal renders", () => {
      const stateSelectors = {
        patients: {
          patient: patientMocks,
        },
        services: {
          services: selectedServiceListMocks,
          labors: laborListMocks,
          details: detailListMocks,
          selectedServices: null,
        },
      };
      // @ts-ignore
      mockedUseSelector.mockImplementation(state => state(stateSelectors));
      mockedUseHandleServicesForm.mockReturnValue({
        handleServicesForm: jest.fn(),
        filteredServicesList: serviceListMocks,
        isLoading: false,
        isError: false,
      });
      mockedUseHandleLaborChange.mockReturnValue({
        handleLaborChange: jest.fn(),
        saveDetails: jest.fn(),
        detailsState: null,
      });
      mockedUseServiceDelete.mockReturnValue({ removeService: jest.fn() });

      const { container } = render(allTheProviders(<ServicesEl />));

      expect(screen.getByTestId("services-container")).toBeInTheDocument();
      expect(screen.getByTestId("services-header")).toBeInTheDocument();
      expect(
        screen.getByTestId("services-header-buttons-box")
      ).toBeInTheDocument();
      expect(
        screen.getByTestId("add-to-selected-service-btn")
      ).toBeInTheDocument();
      expect(screen.getByTestId("select-labor")).toBeInTheDocument();
      expect(screen.getByTestId("services-info-list")).toBeInTheDocument();

      const listitem = screen.getAllByTestId(
        "services-info-listitem"
      )[0] as HTMLAnchorElement;
      expect(listitem).toBeInTheDocument();

      const deleteService = screen.getAllByTestId(
        "delete-service-info-btn"
      )[0] as HTMLAnchorElement;
      expect(deleteService).toBeInTheDocument();

      const infoBox = screen.getAllByTestId(
        "services-info-box"
      )[0] as HTMLAnchorElement;
      expect(infoBox).toBeInTheDocument();

      const boxHeader = screen.getAllByTestId(
        "services-info-box-header"
      )[0] as HTMLAnchorElement;
      expect(boxHeader).toBeInTheDocument();

      const serviceCode = screen.getAllByTestId(
        "services-info-box-service-code"
      )[0] as HTMLAnchorElement;
      expect(serviceCode).toBeInTheDocument();

      const serviceName = screen.getAllByTestId(
        "services-info-box-service-name"
      )[0] as HTMLAnchorElement;
      expect(serviceName).toBeInTheDocument();

      expect(container).toMatchSnapshot();
    });
  });
});
