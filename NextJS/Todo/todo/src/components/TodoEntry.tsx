"use client"

import { useState } from "react";


const TodoEntry = ({ onAddTodo }: any) => {
    const [input, setInput] = useState("");

    /**
     * - Handle Submit. Handles the submission of the todo list task. 
     * @param e - Event. Form event.
     */
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault(); // Stops form submission. 
        onAddTodo(input); // Adds input to the todo list.
        setInput("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a new task" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoEntry;