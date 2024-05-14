"use client"

import { useState } from "react";


const TodoEntry = ({ todos, setTodos }: { todos: string[]; setTodos: (todos: string[]) => void; }) => {
    const [input, setInput] = useState("");

    const addTodo = (todo: string) => { // Defining a function called addTodo which takes a string parameter named todo
        fetch('http://localhost:5000/todo', { // Requests data from the URL.
          method: 'POST', // Request type set to POST.
          headers: { // Headers for the request. 
            'Content-Type': 'application/json', // Content type set to JSON.
          },
          body: JSON.stringify({ title: todo }), // Converts todo to JSON string.
        })
        .then(response => response.text())  // Get the response text
        .then(text => {
            try {
                return JSON.parse(text);  // Try to parse the text as JSON
            } catch (error) {
                console.error('Failed to parse JSON:', text);  // Log the raw text if it's not valid JSON
                throw error;
            }
        })
        .then(data => console.log(data))
        .catch((error) => {
          console.error('Error:', error);
        });
    };

    /**
     * - Handle Submit. Handles the submission of the todo list task. 
     * @param e - Event. Form event.
     */
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault(); // Stops form submission. 
        addTodo(input); // Adds input to the todo list.
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