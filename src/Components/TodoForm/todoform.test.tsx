import { render, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";
import userEvent from "@testing-library/user-event";



const addTodo = jest.fn();
describe("TodoForm", () => {
    test("renders properly", () => {
        render(<TodoForm addTodo={addTodo} />)
        const inputElement = screen.getByRole("textbox");
        const buttonElement = screen.getByRole("button");
        expect(inputElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    })

    test("add todo", async () => {
        const user = userEvent.setup();
        render(<TodoForm addTodo={addTodo} />)
        const inputElement = screen.getByRole("textbox");
        const buttonElement = screen.getByRole("button");
        await user.type(inputElement, "new task");
        await user.click(buttonElement);
        expect(addTodo).toHaveBeenCalled();
        expect(addTodo).toHaveBeenCalledWith("new task");
        expect(inputElement).toHaveValue("");

    })

})