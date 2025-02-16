"use client";
import { useRouter } from "next/navigation";
import React from "react";

function AdminFunctions() {
  const router = useRouter();
  return (
    <div>
      <ul className="bg-black">
        <li
          onClick={() => router.push("/")}
          className="h-full text-xl p-2 cursor-pointer"
        >
          {" "}
          ADD DEARTMENT{" "}
        </li>
      </ul>
    </div>
  );
}

export default AdminFunctions;
