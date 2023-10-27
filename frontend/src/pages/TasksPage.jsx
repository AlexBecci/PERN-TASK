import { useEffect } from "react";

import TaskCard from "../components/tasks/TaskCard";
import { useTasks } from "../context/TaskContext";
import NoTaskFound from "../components/tasks/NoTaskFound";
function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);
  if(tasks.length == 0){
    return(
        <NoTaskFound/>
    )
  }
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto px-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TasksPage;
