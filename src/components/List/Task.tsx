"use client";

import { useState } from "react";
import { Trash, Check } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";

export function Task() {

  const [isComplete, setIsComplete] = useState(true)

  const tasks = [
    {
      id: uuidv4(),
      title: "Estudar JavaScript ",
      isComplete: true,
    },
    {
      id: uuidv4(),
      title: "Estudar TypeScript",
      isComplete: true,
    },
    {
      id: uuidv4(),
      title: "Estudar Tailwind",
      isComplete: true,
    },
    {
      id: uuidv4(),
      title: "Estudar Next",
      isComplete: true,
    },
    {
      id: uuidv4(),
      title: "Estudar React",
      isComplete: false,
    },
    {
      id: uuidv4(),
      title: "Estudar React Native",
      isComplete: false,
    },
    {
      id: uuidv4(),
      title: "Estudar React Native",
      isComplete: false,
    },
  ];


  function handleCheck() {
    setIsComplete(!isComplete)
  }

  function handleDeletTask() {
    console.log('Clicou para deletar')
  }

  return (
    <>
      {
        tasks.map(item => (
          <div 
            key={item.id}
            className="flex items-start justify-between self-stretch bg-gray-500 border border-gray-400 rounded-lg gap-3 p-4"
          >

            <button className="flex justify-center items-center p-2" onClick={handleCheck}>
              <span 
                className={
                  isComplete ? 
                    "w-5 h-5 border-2 rounded-full border-blue hover:border-blue-dark hover:bg-teste transition" 
                  : 
                    "w-5 h-5 border-2 rounded-full border-purple-dark bg-purple-dark hover:border-purple hover:bg-purple transition"}
              >
                {
                  isComplete == false && <Check className="text-gray-100" />
                }
                
              </span>
            </button>

            <p className="text-sm text-gray-100 leading-4 font-normal">
              {item.title}
            </p>
            <button 
              onClick={handleDeletTask}
              className="flex justify-center items-center p-2 cursor-pointer group hover:bg-gray-400 rounded"
            >
              <Trash className="text-gray-300 transition group-hover:text-danger w-3.5 h-3.5" />
            </button>
          </div>
        ))
      }
    </>
  );
}



{/* <label htmlFor="checkbox" className="hidden">
<input type="checkbox"  />
<span className="flex items-center justify-center w-5 h-5 rounded-full">
  oi
</span>
</label> */}