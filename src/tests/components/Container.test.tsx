import { render, screen, cleanup } from "@testing-library/react";
import { allTheProviders, serviceListMocks, detailListMocks } from "tests";
import * as sharedHooks from "shared/hooks";
import * as containerHooks from "entities/Container/hooks";
import { Containers } from "entities/Container";

afterEach(() => {
  cleanup();
});

jest.mock("shared/hooks");
jest.mock("entities/Container/hooks");

const mockedUseSelector = jest.spyOn(sharedHooks, "useAppSelector");
const mockedUseToggle = jest.spyOn(containerHooks, "useToggleContainersModal");

describe("Container component", () => {
  it("Container renders", () => {
    mockedUseToggle.mockReturnValue({
      showContainersModal: false,
      toggleContainersModal: jest.fn(),
    });

    render(allTheProviders(<Containers />));

    expect(screen.getByTestId("containers-container")).toBeInTheDocument();
    expect(screen.getByText("Containers")).toBeInTheDocument();
    expect(screen.getByTestId("add-containers-btn")).toBeInTheDocument();
    expect(
      screen.getByText(
        "You can calculate containers after you have added services and selected a labs"
      )
    ).toBeInTheDocument();
  });

  it("Container renders text with selected services", () => {
    mockedUseToggle.mockReturnValue({
      showContainersModal: false,
      toggleContainersModal: jest.fn(),
    });

    const stateSelectors = {
      services: {
        services: serviceListMocks,
        details: null,
      },
    };
    // @ts-ignore
    mockedUseSelector.mockImplementation(state => state(stateSelectors));

    render(allTheProviders(<Containers />));

    expect(screen.getByTestId("containers-container")).toBeInTheDocument();
    expect(
      screen.getByText(
        "You can calculate containers after you have selected a labs"
      )
    ).toBeInTheDocument();
  });

  it("Container renders text with selected services and labors", () => {
    mockedUseToggle.mockReturnValue({
      showContainersModal: false,
      toggleContainersModal: jest.fn(),
    });

    const stateSelectors = {
      services: {
        services: serviceListMocks,
        details: detailListMocks,
      },
    };
    // @ts-ignore
    mockedUseSelector.mockImplementation(state => state(stateSelectors));

    render(allTheProviders(<Containers />));

    expect(screen.getByTestId("containers-container")).toBeInTheDocument();
    expect(screen.getByText("You can calculate container")).toBeInTheDocument();
  });

  it("Container Modal renders", () => {
    mockedUseToggle.mockReturnValue({
      showContainersModal: true,
      toggleContainersModal: jest.fn(),
    });

    const stateSelectors = {
      services: {
        services: serviceListMocks,
        details: detailListMocks,
      },
    };
    // @ts-ignore
    mockedUseSelector.mockImplementation(state => state(stateSelectors));

    render(allTheProviders(<Containers />));

    expect(screen.getByTestId("containers-container")).toBeInTheDocument();
    expect(screen.getByTestId("backdrop")).toBeInTheDocument();
    expect(screen.getByTestId("modal-content")).toBeInTheDocument();
    expect(screen.getByTestId("containers-modal-header")).toBeInTheDocument();
    expect(
      screen.getByTestId("containers-modal-header-title")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("close-modal-containers-btn")
    ).toBeInTheDocument();
    expect(screen.getByTestId("containers-modal-body")).toBeInTheDocument();
    expect(screen.getByTestId("containers-modal-text")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Unfortunately, I do not know how this block works, so please understand and forgive me."
      )
    ).toBeInTheDocument();
  });
});
