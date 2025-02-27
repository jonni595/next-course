import { Suspense } from "react";
import { Params, Posts } from "@/app/lib/definitions";
import { loadPost } from "@/app/lib/utils";
import PostPage from "../page";

export default async function Page({ params }: Params) {
  const post: Posts = await loadPost(params.postId);

  return (
    <>
      <div className="flex flex-col p-4 text-center items-center justify-center w-80 border border-indigo-600 rounded-3xl">
        <h1 className="text-3xl text-indigo-600 font-bold mb-4">
          {post.id} {post.title}
        </h1>
        <p className="text-gray-500">{post.body}</p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <PostPage />
      </Suspense>
    </>
  );
}
