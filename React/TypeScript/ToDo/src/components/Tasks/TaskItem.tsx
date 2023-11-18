import { useState } from "react";

/**
 * Task Item main component.
 * @param name -  Name of task (set by user).
 * @returns - Task Item name and delete button.
 */
const TaskItem = ({ name }: { name: string}) => {
    const [done, setDone] = useState(false);
    return (
        <div className="flex justify-between bg-white p-1 px-3 rounded-sm">
            <div className="flex gap-2 items-center">
                <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
                {name}
            </div>
            <button className="bg-green-200 hover:bg-green-300 rounded-lg p-1 px-3">
                Delete
            </button>
        </div>
    );
};

export default TaskItem;