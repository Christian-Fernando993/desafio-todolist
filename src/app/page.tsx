import { CreateNewTask } from "@/components/List/CreateNewTaks";
import { ToDoList } from "@/components/List/ToDoList";
import { Header } from "@/components/header";
import { v4 as uuidv4 } from 'uuid'

export default function Home() {

  return (
    <main>
      <Header />
      <section className='mb-10'>
        <CreateNewTask />
        <ToDoList />
      </section>
      
    </main>
  );
}
