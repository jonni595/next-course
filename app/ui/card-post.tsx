import { Posts } from "@/app/lib/definitions";
import Link from "next/link";

type Post = {
  items: Posts[];
};

export default function CardPost({ items }: Post) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col w-80 border border-transparent hover:border-indigo-600 rounded-3xl p-4 ease-in-out duration-300"
        >
          <h2 className="text-2xl font-bold">
            {item.id} {item.title}
          </h2>
          <p className="text-gray-500">{item.body}</p>
          <Link
            href={`/posts/${item.id}`}
            className="text-indigo-600 hover:text-indigo-800 ease-in-out duration-300 mt-2"
          >
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
}
