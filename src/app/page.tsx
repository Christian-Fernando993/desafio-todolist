import { Tasks } from "@/components/List/Tasks";
import { Header } from "@/components/header";
import { v4 as uuidv4 } from 'uuid'

export default function Home() {

  return (
    <div>
      <Header />
      <Tasks />
    </div>
  );
}
