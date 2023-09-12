import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

const dummyData = [
    {
      id: 1,
      taskName: 'Task 1',
      completed: false
    },
    {
      id: 2,
      taskName: 'Task 2',
      completed: false
    },
    {
      id: 3,
      taskName: 'Task 3',
      completed: false
    }
  ]
  

const handleTodoStatus = jest.fn();
const deleteTodoItem = jest.fn();
  

describe("TodoList", () => {
    test("renders properly and check todo items if it's  present", () => {
        render(<TodoList todos={dummyData} handleTodoStatus={handleTodoStatus} deleteTodo={deleteTodoItem}  />);
    });
    test("renders all the todo items", () => {
        render(<TodoList todos={dummyData} handleTodoStatus={handleTodoStatus} deleteTodo={deleteTodoItem}  />);
        const todoItems = screen.getAllByRole("listitem");
      expect(todoItems).toHaveLength(3);


      
      expect(todoItems[0]).toHaveTextContent('Task 1');
      expect(todoItems[1]).toHaveTextContent('Task 2');
      expect(todoItems[2]).toHaveTextContent('Task 3');

      const task1 = screen.getByText('Task 1');
      const task2 = screen.getByText('Task 2');
      const task3 = screen.getByText('Task 3');

      expect(task1).toBeInTheDocument();
      expect(task2).toBeInTheDocument();
      expect(task3).toBeInTheDocument();
    });
    
})