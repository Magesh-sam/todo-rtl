import React from 'react'
import { ITodoItem } from '../../types'
import './todoitem.css'

export default function TodoItem({id,taskName,completed,handleTodoStatus,deleteTodo}:ITodoItem) {
  return (
      <li >
          <p  >{taskName}</p>
      <input type="checkbox" checked={completed} onChange={() => handleTodoStatus(id) } />
          <button onClick={() => deleteTodo(id)} >Delete</button>
    </li>
  )
}
