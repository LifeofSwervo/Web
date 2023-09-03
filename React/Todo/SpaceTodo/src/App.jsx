import { useState, useEffect } from 'react'
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'
import 'bootstrap/dist/css/bootstrap.css'

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS") // Checking browser's storage for value under key "ITEMS" 
    if (localValue == null) return [] // If "ITEMS" is not found, return empty array
    return JSON.parse(localValue) // once found it is parsed as JSON
  })

  // Synch todo state with browser's local storage (triggered upon "todos" state changing)
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }

  // Updates completion of task
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
      <NewTodoForm onSubmit={addTodo} />
      <h1 className='header'>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}