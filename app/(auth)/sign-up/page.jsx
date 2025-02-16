"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { z } from "zod";
import { signUpSchema } from "@/lib/types";

function SignupForm() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  // const [buttonDisabled, setbuttonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (
  //     user.username.length > 0 &&
  //     user.email.length > 0 &&
  //     user.password.length > 0
  //   ) {
  //     setbuttonDisabled(false);
  //   } else {
  //     setbuttonDisabled(true);
  //   }
  // }, [user]);

  //Client side validation
  const isValidateForm = () => {
    const vaildationResponse = signUpSchema.safeParse(user);
    if (!vaildationResponse.success) {
      console.log(vaildationResponse.error.issues);
      let errormessage = "";
      vaildationResponse.error.issues.forEach((issue) => {
        errormessage += `${issue.path[0]}: ${issue.message}.`;
      });
      toast.error(errormessage);
      return false;
    }
    return true;
  };
  const onSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!isValidateForm()) {
        return;
      }

      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          password: user.password,
        }),
      });

      if (response.ok) {
        router.push("/sign-in");
      } else {
        //Log error
        console.error(error);
      }
      console.log("User: " + user.username);
      console.log("Email: " + user.email);
      console.log("Password: " + user.password);
    } catch (e) {
      console.log(e);
    } finally {
      console.log("Finally");
      setLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        className="bg-gray-800 flex flex-col w-96 p-8 rounded-lg shadow-lg text-white"
        onSubmit={onSignup}
      >
        <h1 className="text-2xl font-bold">Sign Up</h1>

        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          autoComplete="username"
          className="text-black"
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          autoComplete="email"
          className="text-black"
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          autoComplete="current-password"
          className="text-black"
        />
        <button className="bg-blue-500 p-2 mt-2">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
