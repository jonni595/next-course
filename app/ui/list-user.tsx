import Image from "next/image";
import Link from "next/link";
import { UsersList } from "@/app/lib/definitions";

export default function ListUser({ items }: UsersList) {
  return (
    <ul role="list" className="divide-y divide-slate-800">
      {items.map((items) => (
        <Link href={`/users/${items.id}`} key={items.id}>
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <Image
                src={items.avatar}
                alt={items.first_name}
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                width={50}
                height={50}
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-white">
                  {items.first_name} {items.last_name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {items.email}
                </p>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
