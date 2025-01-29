import { Users } from "@/app/lib/definitions";
import { loadUser } from "@/app/lib/utils";
import Image from "next/image";

type Params = {
  params: {
    id: string;
  };
};

export default async function UserInfo({ params }: Params) {
  const user: Users = await loadUser(params.id);

  console.log(user);

  return (
    <div className="flex flex-col items-center justify-center w-80 p-8 border border-slate-600 rounded-2xl">
      <div>
        <Image
          src={user.avatar}
          alt={user.first_name}
          className="h-18 w-18 flex-none rounded-md bg-gray-50"
          width={50}
          height={50}
        />
      </div>
      <div className="min-w-0 flex-auto text-center">
        <p className="text-sm font-semibold leading-6 text-white">
          {user.first_name} {user.last_name}
        </p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
          {user.email}
        </p>
      </div>
    </div>
  );
}
