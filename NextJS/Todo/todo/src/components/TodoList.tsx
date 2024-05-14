import { useEffect, useState } from "react";

const TodoList = ({ todos  }: { todos: string[]; }) => {
    /*
    useEffect(() => {
        fetch("http://localhost:5000/todo") // Gets data from URL.
        .then(response => response.json()) // Converts response to JSON.
        .then(data => setTodos([data.message])) // Sets data to todos.
        .catch((error) => { // Logs errors to console. 
            console.error("Error: ", error);
        });
    }, []);
    */
    return (
        <div>
            {todos.map((todo: string, index: number) => ( // Iterates todo, assigns index to each item.
                <p key={index}>{todo}</p>
        ))}
    </div>
    )
}

export default TodoList;