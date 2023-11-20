import { FormEvent, useState } from "react";

/**
 * 
 * @param handleSubmit - Handles the form submission. 
 * @returns - Returns form and "Add Task" button.
 */
const InputContainer = ({
    handleSubmit,
} : {
    handleSubmit: (e: FormEvent<HTMLFormElement>, value: string) => void;
}) => {
    const [newTaskName, setNewTaskName] = useState("");
    return (
        <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={(e) => {
                handleSubmit(e, newTaskName); // Calls handleSubmit function with FormEvent and user taskName. 
                setNewTaskName(""); // Clears input field
            }}
        >
            <div className="flex flex-col">
                <label className="text-white">Enter your Task: </label>
                {/* Input field for entering task name */}
                <input
                    className="p-1 rounded-sm"
                    type="text"
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                />
                </div>
                {/* Add Task button */}
                <button
                    type="submit"
                    className="bg-green-100 rounded-lg hover:bg-green-200 p-1"
                >
                    Add Task
                </button>   
        </form>    
    );   
};

export default InputContainer;