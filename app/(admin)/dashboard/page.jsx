import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import CreateEntity from "/components/CreateEntity";
import AddDepartments from "/components/AddDepartment";
async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (session?.user) {
    return (
      <div className="pt-28 min-h-screen w-full">
        <p className="text-3xl text-black font-bold">{`Admin Dashboard - Welcome back ${session?.user.username}`}</p>
        <CreateEntity />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <p className="text-3xl text-black font-bold">Please Login</p>
    </div>
  );
}

export default AdminDashboard;
