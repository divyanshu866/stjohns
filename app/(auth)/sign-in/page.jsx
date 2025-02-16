"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { z } from "zod";
import { signInSchema } from "@/lib/types";
import { signIn } from "next-auth/react";
import Logo from "@/components/Logo";
import Link from "next/link";
function SignInForm() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // const [buttonDisabled, setbuttonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  //Client side validation
  const isValidateForm = () => {
    const vaildationResponse = signInSchema.safeParse(user);
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
  const onSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!isValidateForm()) {
        return;
      }
      const signInData = await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false,
      });

      if (signInData?.error) {
        console.log(signInData.error);
      } else {
        router.refresh();
        router.replace("/dashboard");
      }
    } catch (e) {
      console.log(e);
    } finally {
      console.log("Finally");
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[#f8e8d6] overflow-hidden">
      {/* Sign In Form */}
      <form
        className="bg-white w-full max-w-lg p-8 rounded-lg shadow-sm"
        onSubmit={onSignIn}
      >
        {/* Logo Header */}
        <Link href="/">
          <div className="flex items-center justify-start space-x-3 mb-8">
            <div className="p-2 bg-transparent">
              <Logo />
            </div>
            <h1 className="text-2xl font-bold text-[#422416] transform transition-transform">
              ST. JOHN'S COLLEGE
              <span className="block text-sm font-normal text-[#764024]/80">
                Commerce Association
              </span>
            </h1>
          </div>
        </Link>
        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#422416] mb-2">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              autoComplete="email"
              className="w-full px-4 py-3 text-[#422416] rounded-lg border-2 border-[#764024]/20 focus:border-[#764024] focus:ring-2 focus:ring-[#764024]/30 placeholder-[#422416]/60 transition-all duration-300"

              // ... other input props
            />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#764024]/40">
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-[#422416] mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              autoComplete="current-password"
              className="w-full px-4 py-3 text-[#422416] rounded-lg border-2 border-[#764024]/20 focus:border-[#764024] focus:ring-2 focus:ring-[#764024]/30 placeholder-[#422416]/60 transition-all duration-300"

              // ... other input props
            />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#764024]/40">
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
        </div>

        {/* Sign In Button */}
        <button
          className="w-full py-3.5 bg-gradient-to-br from-[#764024] to-[#422416] text-[#f5f5f4] font-semibold rounded-lg 
      hover:shadow-lg hover:scale-[1.02] transition-all duration-300 shadow-md"
        >
          Sign In
        </button>

        {/* Helper Links */}
        <div className="mt-6 flex justify-between">
          <a
            href="#forgot-password"
            className="text-sm text-[#764024] hover:text-[#422416] w-full text-center transition-colors"
          >
            Forgot Password?
          </a>
        </div>

        {/* Social Auth Divider */}
        {/* <div className="my-8 flex items-center">
          <span className="flex-1 border-t border-[#764024]/20"></span>
          <span className="px-4 text-sm text-[#764024]/60">
            Or continue with
          </span>
          <span className="flex-1 border-t border-[#764024]/20"></span>
        </div> */}

        {/* Social Buttons */}
        {/* <div className="grid grid-cols-2 gap-4">
          <button
            className="flex items-center justify-center gap-2 py-2.5 border-2 border-[#764024]/20 rounded-lg 
        hover:border-[#764024]/40 transition-colors duration-300"
          >
            <GoogleIcon className="w-5 h-5 text-[#764024]" />
            <span className="text-sm text-[#422416]">Google</span>
          </button>
          <button
            className="flex items-center justify-center gap-2 py-2.5 border-2 border-[#764024]/20 rounded-lg 
        hover:border-[#764024]/40 transition-colors duration-300"
          >
            <MicrosoftIcon className="w-5 h-5 text-[#764024]" />
            <span className="text-sm text-[#422416]">Microsoft</span>
          </button>
        </div> */}
      </form>

      {/* Footer Note */}
      <p className="mt-8 text-sm text-[#764024]/60 max-w-md text-center">
        By continuing, you agree to our
        <a href="#terms" className="underline hover:text-[#422416]">
          {" "}
          Terms of Service
        </a>{" "}
        and
        <a href="#privacy" className="underline hover:text-[#422416]">
          {" "}
          Privacy Policy
        </a>
      </p>
    </div>
  );
}

export default SignInForm;
