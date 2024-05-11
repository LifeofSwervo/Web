"use client"

import { useState } from "react";


const TodoEntry = ({ onAddTodo }: any) => {
    const [input, setInput] = useState("");

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        onAddTodo(input);
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