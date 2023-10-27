import React from "react";
import { Card,Button } from "../ui";
import { useTasks } from "../../context/TaskContext";
import { useNavigate } from "react-router-dom";


function TaskCard({ task }) {

const {deleteTask} = useTasks();
const navigate = useNavigate();

  return (
    <Card className="px-8 py-4  mx-8 my-12 flex flex-col items-center justify-center border-2 rounded-md">
      <div>
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div className="my-2 flex justify-center gap-x-2">
        <Button className="bg-sky-500 hover:bg-sky-400" onClick={()=>navigate( `/tasks/${task.id}/edit`)}>editar</Button>
        <Button className='bg-red-500 hover:bg-red-400' onClick={async()=> {
            if(window.confirm("Estas seguro de eliminar esta tarea?")){
                deleteTask(task.id)
            }
        }}>eliminar</Button>
      </div>
    </Card>
  );
}

export default TaskCard;
