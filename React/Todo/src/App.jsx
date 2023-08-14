import "./styles.css"


export default function App() {
  return (
    <> 
      <form className="new-item-form">
        <div className='form-row'>
          <label htmlFor="item">New Task</label>
          <input type="text" id="item" />
        </div>
        <button className="btn"> Add Task</button>
      </form>
      <h1>Todo List</h1>
    </>
  )
}
