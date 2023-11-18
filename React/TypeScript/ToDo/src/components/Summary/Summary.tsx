import SummaryItem from "./SummaryItem"
import { Task } from "../../App";

/** 
Summarizes the to-do information, informing user the status of the task. 
@param tasks - An array of task
*/
const Summary = ({ tasks }: { tasks: Task[] }) => {
  const total = tasks.length; // Grand total of task
  const pending = tasks.filter((t) => t.done === false).length; // Task left to-do
  const done = tasks.filter((t) => t.done === true).length; // Completed task
    return (
        <>
          <div className="flex justify-between">
            <SummaryItem itemName={"Total"} itemValue={total} />
            <SummaryItem itemName={"To Do"} itemValue={pending} />
            <SummaryItem itemName={"Done"} itemValue={done} />
          </div>
        </>
    );
};

export default Summary