import { Posts } from "@/app/lib/definitions";

type Post = {
  items: Posts[];
};

export default function CardPost({ items }: Post) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col w-80 border border-transparent hover:border-indigo-600 rounded-3xl p-4 ease-in-out duration-300"
        >
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p className="text-gray-500">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
