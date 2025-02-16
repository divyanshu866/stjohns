import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { headers } from "next/headers";
import NavbarClient from "@/components/NavbarClient";
import AdminNavbarClient from "@/components/AdminNavbarClient";

const Navbar = async ({ isAdmin = false }) => {
  const session = await getServerSession(authOptions);

  return (
    <>
      {isAdmin ? (
        <AdminNavbarClient session={session} />
      ) : (
        <NavbarClient session={session} />
      )}
    </>
  );
};

export default Navbar;
