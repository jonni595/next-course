import ListUser from "../ui/list-user";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

export default async function UsersPage() {
  const users = await fetchUsers();
  return (
    <div>
      <ListUser items={users} />
    </div>
  );
}
