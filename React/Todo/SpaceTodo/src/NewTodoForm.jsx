import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState(""); // Sets newItem as ("") and setNewItem as the function updating the state

    // Handles Task Submission
    function handleSubmit(e) {
        e.preventDefault(); // Prevents page from reloading
        if (newItem === "") return // Avoids empty submission
        onSubmit(newItem) // Sets text area back to newItem variable
        setNewItem("") // Clears text area
    }
    return (
        <form onSubmit={handleSubmit} className="newItemForm">
            <div className="formRow">
                <label htmlFor="item">New Task</label>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
            </div>
            <button className="btn btn-info">Add Task</button>
        </form>
    )
}