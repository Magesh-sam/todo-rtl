import React from 'react'
import { ITodoList } from '../../types'
import TodoItem from '../TodoItem/TodoItem'
import './todolist.css'

export default function TodoList({todos,handleTodoStatus,deleteTodo}:ITodoList) {
  return (
      <ul>
          {todos.map(todo => (
            <TodoItem key={todo.id} id={todo.id} deleteTodo={deleteTodo} handleTodoStatus={handleTodoStatus} taskName={todo.taskName} completed={todo.completed} />
          ))}
    </ul>
  )
}
