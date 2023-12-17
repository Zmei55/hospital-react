import { render, screen, cleanup } from "@testing-library/react";
import { allTheProviders, requestListMocks } from "tests";
import * as sharedHooks from "shared/hooks";
import * as requestHooks from "entities/Request/hooks";
import { FindRequest } from "entities/Request";

afterEach(() => {
  cleanup();
});

jest.mock("shared/hooks");
jest.mock("entities/Request/hooks");

const mockedUseNavigate = jest.spyOn(sharedHooks, "useAppNavigate");
const mockedUseFilterRequest = jest.spyOn(requestHooks, "useFilterRequest");
const mockedUseChooseRequest = jest.spyOn(requestHooks, "useChooseRequest");

describe("FindRequest component", () => {
  beforeEach(() => {
    mockedUseNavigate.mockReturnValue({ handleNavigate: jest.fn() });
    mockedUseChooseRequest.mockReturnValue({ chooseRequest: jest.fn() });
  });

  it("FindRequest renders", () => {
    mockedUseFilterRequest.mockReturnValue({
      requestList: null,
      setRequestList: jest.fn(),
      handleFilterRequests: jest.fn(),
      isLoading: false,
      isError: false,
    });

    render(allTheProviders(<FindRequest />));

    expect(screen.getByTestId("find-request-container")).toBeInTheDocument();
  });

  it("FindRequest filter render", () => {
    mockedUseFilterRequest.mockReturnValue({
      requestList: null,
      setRequestList: jest.fn(),
      handleFilterRequests: jest.fn(),
      isLoading: false,
      isError: false,
    });

    render(allTheProviders(<FindRequest />));

    expect(screen.getByTestId("find-request-header")).toBeInTheDocument();
    expect(screen.getByTestId("find-request-header-title")).toBeInTheDocument();
    expect(screen.getByText("Find a request")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reset/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /find/i })).toBeInTheDocument();
    expect(screen.getByTestId("close-find-request-btn")).toBeInTheDocument();
    expect(screen.getByTestId("find-request-body")).toBeInTheDocument();
    expect(screen.getByTestId("find-request-form")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/first name and last name/i)
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/card number/i)).toBeInTheDocument();
    expect(
      screen.getByTestId("find-request-body-request-number-input")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("find-request-body-request-date-input")
    ).toBeInTheDocument();
  });

  it("FindRequest requestList renders", () => {
    mockedUseFilterRequest.mockReturnValue({
      requestList: requestListMocks,
      setRequestList: jest.fn(),
      handleFilterRequests: jest.fn(),
      isLoading: false,
      isError: false,
    });

    const { container } = render(allTheProviders(<FindRequest />));

    expect(screen.getByTestId("find-request-list")).toBeInTheDocument();
    expect(screen.getByTestId("find-request-list-header")).toBeInTheDocument();
    expect(screen.getByText("First name and last name")).toBeInTheDocument();
    expect(screen.getByText("Card number")).toBeInTheDocument();
    expect(screen.getByText("Request number")).toBeInTheDocument();
    expect(screen.getByText("Request date")).toBeInTheDocument();
    expect(screen.getByTestId("find-request-list-body")).toBeInTheDocument();

    const listItem = screen.getAllByTestId("find-request-listitem")[0];
    expect(listItem).toBeInTheDocument();

    const patientName = screen.getAllByTestId("find-request-listitem-name")[0];
    expect(patientName).toBeInTheDocument();

    const cardNumber = screen.getAllByTestId(
      "find-request-listitem-card-number"
    )[0];
    expect(cardNumber).toBeInTheDocument();

    const requestNumber = screen.getAllByTestId(
      "find-request-listitem-request-number"
    )[0];
    expect(requestNumber).toBeInTheDocument();

    const requestDate = screen.getAllByTestId(
      "find-request-listitem-request-date"
    )[0];
    expect(requestDate).toBeInTheDocument();

    const selectBtn = screen.getAllByTestId("select-found-request")[0];
    expect(selectBtn).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
