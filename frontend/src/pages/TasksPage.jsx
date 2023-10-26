import { useEffect } from "react";

import TaskCard from "../components/tasks/TaskCard";
import { useTasks } from "../context/TaskContext";
function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);
  if(tasks.length == 0){
    return(
      <div>
        No Task FOund
      </div>
    )
  }
  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TasksPage;
