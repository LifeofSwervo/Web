import { FormEvent, useState } from 'react'
import './index.css'
import { v4 as uuidv4 } from 'uuid';
import Container from './components/Container'
import Input from './components/Input';
import Summary from './components/Summary/Summary';
import Tasks from './components/Tasks/Tasks';

/**
 * - Interface for task.
 */
export interface Task {
  name: string;
  done: boolean;
  id: string;
}

/**
 * - Test
 */
const initialTasks = [
  {
    name: "task one",
    done: false,
    id: uuidv4(),
  },
  {
    name: "task two",
    done: true,
    id: uuidv4(),
  },
];

/**
 * -  App function containing task helpers and app info.
 */
function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  /**
   * Handles submission.
   * @param e - Event variable, repersenting form submission.
   * @param value - Task value.
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>, value: string) => {
    e.preventDefault();
    const newTask = {
      name: value,
      done: false,
      id: uuidv4(),
    };
    setTasks((tasks) => [...tasks, newTask]); // Creates a new array with current task, and new task at end.
  };

  /**
   * - Toggles task id to be done
   * @param id - ID being switched to done.
   * @param done  - Variable toggling on id.
   */
  const toggleDoneTask = (id: string, done: boolean) => {
    setTasks((tasks) => // Marks id done.
    tasks.map((t) => {
      if (t.id === id) {
        t.done = done;
      }
      return t;
    }));
  };

  /**
   * - Handles deleting task.
   * @param id - Id used to match task to be deleted. 
   */
  const handleDeleteTask = (id: string) => {
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
  };
  return (
    <div className="flex justify-center m-5">
      <div className="flex flex-col items-center">
        <div className="sm:w-[640px] border shadow p-10 flex flex-col gap-10">
          <Container title={"Summary"}>
            <Summary tasks={tasks} />
          </Container>
          <Container>
            <Input handleSubmit={handleSubmit} />
          </Container>
          <Container title={"Tasks"}>
            <Tasks tasks={tasks}
              toggleDone={toggleDoneTask}
              handleDelete={handleDeleteTask}
            />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
