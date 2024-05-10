import { CreateNewTask } from "@/components/List/CreateNewTaks";
import { ToDoList } from "@/components/List/ToDoList";

export function Tasks(){
    return(
        <div>
            <CreateNewTask />
            <ToDoList />
        </div>
    )
}