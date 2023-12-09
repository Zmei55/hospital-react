import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { allTheProviders } from "tests/utils";
import { Desktop } from "entities/Desktop";

jest.mock("shared/hooks", () => ({
  ...jest.requireActual("shared/hooks"),
}));

describe("Desktop component", () => {
  it("Desktop renders", () => {
    const { container } = render(allTheProviders(<Desktop />, "/desktop"));

    expect(screen.getByTestId("desktop-page")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("all components renders", () => {
    render(allTheProviders(<Desktop />, "/desktop"));

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
    const navigate = jest.fn();
    jest.fn().mockReturnValueOnce(navigate("/request"));
    jest.fn().mockReturnValueOnce(navigate("/find-request"));
    jest.fn().mockReturnValueOnce(navigate("/unknown-part"));
    jest.fn().mockReturnValueOnce(navigate("/unknown-part"));

    render(allTheProviders(<Desktop />, "/desktop"));

    const newRequestBtn = screen.getByTestId("new-request-btn");
    const findRequestBtn = screen.getByTestId("find-request-btn");
    const findContainersBtn = screen.getByTestId("find-containers-btn");
    const documentsBtn = screen.getByTestId("documents-btn");

    userEvent.click(newRequestBtn);
    userEvent.click(findRequestBtn);
    userEvent.click(findContainersBtn);
    userEvent.click(documentsBtn);

    expect(navigate).toHaveBeenCalledTimes(4);
  });
});
