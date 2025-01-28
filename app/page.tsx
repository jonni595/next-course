import { roboto } from "@/app/fonts";
import { Users } from "@/app/lib/definitions";
import ListUser from "./ui/list-user";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const users = await fetchUsers();

  console.log(users);

  return (
    <div className={roboto.className}>
      <h1>Home page</h1>
      <ul role="list" className="divide-y divide-slate-800">
        {users.map((user: Users) => (
          <ListUser key={user.id} items={user} />
        ))}
      </ul>
    </div>
  );
}
