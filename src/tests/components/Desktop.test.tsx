import { render, screen } from "@testing-library/react";
import { allTheProviders } from "tests/utils";
import { Desktop } from "entities/Desktop";
import * as sharedHooks from "shared/hooks";

jest.mock("shared/hooks");

const mockedUseNavigate = jest.spyOn(sharedHooks, "useAppNavigate");

describe("Desktop component", () => {
  it("Desktop renders", () => {
    mockedUseNavigate.mockReturnValue({ handleNavigate: jest.fn() });

    const { container } = render(allTheProviders(<Desktop />));

    expect(screen.getByTestId("desktop-page")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("all components renders", () => {
    mockedUseNavigate.mockReturnValue({ handleNavigate: jest.fn() });

    render(allTheProviders(<Desktop />));

    const newRequestBtn = screen.getByTestId("new-request-btn");
    const findRequestBtn = screen.getByTestId("find-request-btn");
    const findContainersBtn = screen.getByTestId("find-containers-btn");
    const documentsBtn = screen.getByTestId("documents-btn");

    expect(newRequestBtn).toBeInTheDocument();
    expect(screen.getByText(/create a request/i)).toBeInTheDocument();

    expect(findRequestBtn).toBeInTheDocument();
    expect(screen.getByText(/find a request/i)).toBeInTheDocument();

    expect(findContainersBtn).toBeInTheDocument();
    expect(screen.getByText(/find a container/i)).toBeInTheDocument();

    expect(documentsBtn).toBeInTheDocument();
    expect(screen.getByText(/documents/i)).toBeInTheDocument();
  });

  it("all navigates are called", () => {
    const handleNavigate = jest.fn();

    mockedUseNavigate.mockReturnValue({
      handleNavigate: handleNavigate("/request"),
    });
    mockedUseNavigate.mockReturnValue({
      handleNavigate: handleNavigate("/find-request"),
    });
    mockedUseNavigate.mockReturnValue({
      handleNavigate: handleNavigate("/unknown-part"),
    });

    render(allTheProviders(<Desktop />));

    expect(handleNavigate).toHaveBeenCalledTimes(3);
  });
});
