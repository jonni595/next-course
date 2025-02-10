"use client";

import { TaskList } from "@/app/lib/definitions";

export default function TaskCard({ items }: TaskList) {
  return (
    <div className="p-3 border border-slate-600 rounded-md hover:bg-slate-600 hover:cursor-pointer">
      <p className="text-sm font-semibold leading-6 text-white md:uppercase">
        {items.title}
      </p>
      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
        {items.description}
      </p>
      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
        {new Date(items.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
}
