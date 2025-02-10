import { roboto } from "@/app/fonts";
import { prisma } from "./lib/prisma";

const getTasks = async () => {
  return await prisma.task.findMany();
};

export default async function Home() {
  const tasks = await getTasks();
  console.log(tasks);
  return (
    <section className="container mx-auto">
      <div className={`roboto.className grid grid-cols-3 gap-3 mt-10`}>
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-3 border border-slate-600 rounded-md hover:bg-slate-600 hover:cursor-pointer"
          >
            <p className="text-sm font-semibold leading-6 text-white md:uppercase">
              {task.title}
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
              {task.description}
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
              {new Date(task.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
