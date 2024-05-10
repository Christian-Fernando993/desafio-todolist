import { Task } from "./Task";

export function ToDoList() {
  return (
    <div className="w-full max-w-box-to-do-list pt-24 grid m-auto ">
      <header className="flex justify-between pb-6 m-auto w-full max-w-box-to-do-list">
          <div className="flex justify-center items-center gap-4">
            <p className="text-blue text-sm font-bold">Tarefas criadas</p>
            <span className="text-sm rounded-full bg-gray-400 px-2">5</span>
          </div>
          <div className="flex justify-center items-center gap-4 ">
            <p className="text-purple text-sm font-bold">Concluídas</p>
            <span className="text-sm rounded-full bg-gray-400 px-2">
              2 de 5
            </span>
          </div>
      </header>
      <div className=" grid gap-3">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
      
    </div>
  );
}
