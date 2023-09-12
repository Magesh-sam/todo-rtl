import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Todo App", () => {
  test("renders properly", () => {
    render(<App />);
    const headingElement = screen.getByText(/Todo App with RTL/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("check if  dummy data present in todo list", () => {
    render(<App />);
    const todoListElement = screen.getAllByRole("listitem");
    expect(todoListElement.length).toBe(3);
  });
  test("add to do with form", async () => {
    const user = userEvent.setup();
    render(<App />);
    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByRole("button", { name: "Add" });
    await user.type(inputElement, "hello world");
    await user.click(buttonElement);
    const todoListElement = screen.getAllByRole("listitem");
    expect(todoListElement.length).toBe(4);
    expect(todoListElement[3]).toHaveTextContent("hello world");
  });

  describe("todo checkbox", () => {
    test("click checkbox and check todo status", async () => {
      const user = userEvent.setup();
      render(<App />);
      const checkboxElements = screen.getAllByRole("checkbox");
      await user.click(checkboxElements[0]);
      expect(checkboxElements[0]).toBeChecked();
    });

    test("click checkbox and uncheck expecting the todo to be unchecked", async () => {
      const user = userEvent.setup();
      render(<App />);
      const checkboxElements = screen.getAllByRole("checkbox");
      await user.click(checkboxElements[2]);
      await user.click(checkboxElements[2]);
      expect(checkboxElements[2]).not.toBeChecked();
    });
  });

  test("delete a todo and the length should decrement 1", async () => {
    const user = userEvent.setup();
      render(<App />);
      const deleteButtonElements = screen.getAllByRole("button", { name: "Delete" });
      await user.click(deleteButtonElements[0]);
      const todoListElement = screen.getAllByRole("listitem");
      expect(todoListElement.length).toBe(2);
  });
});
