import CardPost from "@/app/ui/card-post";

export default async function PostPage() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return <CardPost items={posts} />;
}
