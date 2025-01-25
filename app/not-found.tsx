import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p className="my-4">Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
