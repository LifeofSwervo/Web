import TaskItem from "./TaskItem";
import { Task } from "../../App";

/**
 * 
 * @param tasks - Task array, (input from user).
 * @param toggleDone - Toggles done boolean
 * @param handleDelete - Handles deleting task id.
 * @returns 
 */
const Tasks = ({
    tasks,
    toggleDone,
    handleDelete,
} : {
    tasks: Task[];
    toggleDone: (id: string, done: boolean) => void;
    handleDelete: (id: string) => void;
}) => {
    return(
        <div className="flex flex-col gap-2">
            {tasks.length ? (
                tasks.map((t) => (
                    <TaskItem
                        key={t.id}
                        name={t.name}
                        done={t.done}
                        id={t.id}
                        toggleDone={toggleDone}
                        handleDelete={handleDelete}
                    />
                ))
            ) : (
                <span className="text-green-100"> No task yet!</span>
            )}
        </div>
    );
};

export default Tasks;