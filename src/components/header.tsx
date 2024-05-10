import Image from "next/image";

import Rocket from "@/assets/rocket.svg";

export function Header() {
  return (
    <header className="bg-gray-700 py-20 flex justify-center items-center">
      <Image className="mr-3" src={Rocket} alt="Icone de Rocket" />
      <h2 className="text-5xl font-black text-blue">
        to
        <span className="text-purple-dark">do</span>
      </h2>
    </header>
  );
}
