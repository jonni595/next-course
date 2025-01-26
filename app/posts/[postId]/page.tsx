import { Params, Posts } from "@/app/lib/definitions";

async function loadPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

export default async function Page({ params }: Params) {
  const post: Posts = await loadPost(params.postId);

  return (
    <div className="flex flex-col p-4 text-center items-center justify-center w-80 border border-indigo-600 rounded-3xl">
      <h1 className="text-3xl text-indigo-600 font-bold mb-4">
        {post.id} {post.title}
      </h1>
      <p className="text-gray-500">{post.body}</p>
    </div>
  );
}
