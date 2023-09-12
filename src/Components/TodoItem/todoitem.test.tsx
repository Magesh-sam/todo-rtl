import { render, screen } from '@testing-library/react';
import TodoItem from './TodoItem';
import userEvent from '@testing-library/user-event';


const handleTodoStatus = jest.fn();
const deleteTodoItem = jest.fn();
describe('TodoItem', () => {
    test("renders properly", () => { 
        render(<TodoItem id={1} taskName="task" completed={false} handleTodoStatus={handleTodoStatus} deleteTodo={deleteTodoItem} />);
        const taskNameElement = screen.getByText(/task/i);
        const checkboxElement = screen.getByRole("checkbox");
        const buttonElement = screen.getByRole("button");
        expect(taskNameElement).toBeInTheDocument();
        expect(checkboxElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    })
    test("checking checkbox and deleting todo", async () => {
        const user = userEvent.setup();
        render(<TodoItem id={1} taskName="task" completed={false} handleTodoStatus={handleTodoStatus} deleteTodo={deleteTodoItem} />);
        const checkboxElement = screen.getByRole("checkbox");
        expect(checkboxElement).not.toBeChecked();
        const buttonElement = screen.getByRole("button");

        await user.click(checkboxElement);
        await user.click(buttonElement);
        expect(handleTodoStatus).toHaveBeenCalledTimes(1);
        expect(deleteTodoItem).toHaveBeenCalledTimes(1);
    })

})