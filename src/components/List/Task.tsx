"use client";

import { useState } from "react";
import Image from "next/image";
import { Trash } from "phosphor-react";

import Unchecked from "@/assets/check_unchecked.svg";
import Unchecked_Hover from "@/assets/check_unchecked_hover.svg";

import { v4 as uuidv4 } from "uuid";

export function Task() {
  const [currentImage, setCurrentImage] = useState(null);

  const tasks = [
    {
      id: uuidv4(),
      title: "Estudar JavaScript",
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
  ];

  const status = [
    {
      icone1: Unchecked,
      icone2: Unchecked_Hover,
    },
  ];

  const handleMouseEnter = (index) => {
    setCurrentImage(index);
  };

  const handleMouseLeave = () => {
    setCurrentImage(null);
  };

  return (
    <>
      {tasks.filter(task => {
        <div
          key={task.id} 
          className="flex justify-between m-auto w-full p-4 max-w-[736px] border border-gray-400 bg-gray-500 rounded-lg gap-3">
          <button className="p-1.5">
            {status.map((imagem, index) => (
              <Image
                key={index}
                src={currentImage === index ? imagem.icone2 : imagem.icone1}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
                alt="Icone de circulo "
                className="w-4 h-4"
              />
            ))}
          </button>
          <p className="text-sm text-gray-100 leading-4 font-normal w-ful max-w-[632px]">
            {task.title}
          </p>
          <button className="p-1.5 group hover:bg-gray-400 cursor-pointer rounded">
            <Trash className="cursor-pointer text-gray-300 transition group-hover:text-danger" />
          </button>
        </div>
      })}
    </>


  );
}
