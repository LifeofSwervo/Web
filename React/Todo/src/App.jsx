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

    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
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
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return (
            <li key={todo.id}> // React uses key to understand which element to change
              <label>
                <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                  {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button> 
            </li>
          )
        })}
      </ul>
      <h1>Todo List</h1>
    </>
  )
}
