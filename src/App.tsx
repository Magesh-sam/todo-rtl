import React,{useState} from 'react';
import './App.css';
import { Todo } from './types';
import TodoList from './Components/TodoList/TodoList';
import TodoForm from './Components/TodoForm/TodoForm';

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



function App() {
  const [todoList, setTodoList] = useState<Todo[]>(dummyData);

const addTodo = (taskName:string) => {
  const newTodo = {
    id: Date.now(),
    taskName,
    completed: false
  }
  setTodoList([...todoList, newTodo])
  
}
  
  const handleTodoStatus = (id: number) => {
    setTodoList(todoList.map(todo => todo.id === id? {...todo, completed:!todo.completed } : todo))
  }

  const deleteTodo = (id:number) => { 
    setTodoList(todoList.filter(todo => todo.id !== id))
  }
  
  console.log(todoList)
  return (
    <main className="App">
      <h1>Todo App with RTL</h1>
      <br />
      <TodoForm addTodo={addTodo} />
      <br />
      <TodoList handleTodoStatus={handleTodoStatus} deleteTodo={deleteTodo} todos={todoList} />
    </main>
  );
}

export default App;
