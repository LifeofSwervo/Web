import { useState } from "react";

const InputContainer = () => {
    const [newTask, setNewTask] = useState(""); 
    return (
        <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col">
                <label className="text-white">Enter your next task: </label>
                <input className="p-1 rounded-sm"
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)} />
            </div>
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