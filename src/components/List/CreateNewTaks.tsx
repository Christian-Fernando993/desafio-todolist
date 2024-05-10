"use client";

import { useState } from "react";
import { PlusCircle } from "phosphor-react";

export function CreateNewTask() {
  const [task, setTask] = useState('')  
  const [newTask, setNewTask] = useState();


  function handleNewTaskChange(event) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleCreateNewTask(event) {
    event.preventDefault()
    setTask([...task, newTask])
    setNewTask('')
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Este campo é obrigatorio!!!')
  }

  return (
    <form 
        onSubmit={handleCreateNewTask}
        className="flex justify-center w-full gap-2 -mt-6">
      <input
        name='task'
        className="flex items-center p-4 bg-gray-500 border-2 border-gray-700 focus:border-purple-dark focus:text-white rounded-lg w-full max-w-input-new-task text-gray-300 text-base/leading-5 font-normal"
        placeholder="Adicione uma nova tarefa"
        
        value={newTask}
        onChange={handleNewTaskChange}
        onInvalid={handleNewCommentInvalid}
        required
      />
      <button className="flex justify-center items-center p-4 gap-2 rounded-lg bg-blue-dark text-gray-100 transition font-bold hover:bg-blue">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
