import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
        onSubmit(newItem)
        setNewItem("")
    }
    return (
        <form onSubmit={handleSubmit} className="newItemForm">
            <div className="formRow">
                <label htmlFor="item">New Task</label>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
            </div>
            <button className="btn">Add Task</button>
        </form>
    )
}