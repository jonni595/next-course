import { roboto } from "@/app/fonts";
import { prisma } from "./lib/prisma";
import TaskCard from "./ui/task-card";

const getTasks = async () => {
  return await prisma.task.findMany();
};

export default async function Home() {
  const tasks = await getTasks();
  console.log(tasks);
  return (
    <section className="container mx-auto">
      <div className={`${roboto.className} grid grid-cols-3 gap-3 mt-10`}>
        {tasks.map((task) => (
          <TaskCard key={task.id} items={task} />
        ))}
      </div>
    </section>
  );
}
