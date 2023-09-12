import React, { FormEvent, useState } from 'react'
import './todoform.css'
import { ITodoForm } from '../../types'

export default function TodoForm({addTodo}:ITodoForm) {
  const [taskName, settaskName] = useState("")
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo(taskName)
    settaskName("")
  }
  return (
    <form onSubmit={handleSubmit} >
      <input type="text" placeholder='task name' name="taskname" value={taskName} onChange={(e) => settaskName(e.target.value)} />
      <button type='submit' >Add</button>
    </form>
  )
}
