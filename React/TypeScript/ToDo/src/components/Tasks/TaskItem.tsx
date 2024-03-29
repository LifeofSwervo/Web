
/**
 * Task Item main component.
 * @param name -  Name of task (set by user).
 * @param done - Boolean indicating task is done. 
 * @param id - String id of task.
 * @param toggleDone - Toggles task done.
 * @param handleDelete - Deletes task's id.
 * @returns - Task Item name and delete button.
 */
const TaskItem = ({
    name,
    done,
    id,
    toggleDone,
    handleDelete,
} : {
    name: string;
    done: boolean;
    id: string;
    toggleDone: (id: string, done: boolean) => void;
    handleDelete: (id: string) => void;
}) => {
    return (
    <div className="flex justify-between bg-white p-1 px-3 rounded-sm">
        <div className="flex gap-2 items-center">
            <input type="checkbox"
            checked={done} 
            onChange={() => toggleDone(id,!done)} 
        />
        {name}
        </div>
        <button className="bg-green-200 hover:bg-green-300 rounded-lg p-1 px-3"
            type="button"
            onClick={() => handleDelete(id)}
        >
            Delete
        </button>
    </div>
    )
}

export default TaskItem;