import { useState } from "react"
import "./styles.css"


export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    
    setTodos((currentTodos) => {
      return [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })
  }


  return (
    <> 
      <form className="new-item-form">
        <div className='form-row'>
          <label htmlFor="item">New Task</label>
          <input type="text" id="item" />
        </div>
        <button className="btn">Add Task</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map(todo => {
          return <li>
          <label>
            <input type="checkbox" checked={todo.completed} />
              {todo.title}
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        })}
      </ul>
      <h1>Todo List</h1>
    </>
  )
}
