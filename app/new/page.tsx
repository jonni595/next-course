"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTask = () => {
  const router = useRouter();

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const cleanTask = () => {
    setTask({ title: "", description: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!task.title || !task.description) {
      return;
    }

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const data = await response.json();
      cleanTask();
      console.log(data);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 w-1/4">
        <input
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Task"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <textarea
          name=""
          id=""
          rows={3}
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Type your task here"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        ></textarea>
        <button className="bg-indigo-600 hover:bg-indigo-800 text-white px-4 py-2 rounded">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
