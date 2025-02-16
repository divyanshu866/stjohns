"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";
import SignOutButton from "@/components/SignOutButton";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function NavbarClient({ session }) {
  const isHomePage = usePathname() == "/" ? true : false;

  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      title: "HOME",
      link: "/",
    },
    {
      title: "DEPARTMENTS",
      link: "/departments",
    },
    {
      title: "EVENTS",
      link: "/events",
    },
    {
      title: "DASHBOARD",
      link: "/dashboard",
    },
  ];
  return (
    <nav
      className={`${
        isHomePage
          ? isScrolled
            ? "bg-[#e9e9e9]/80 backdrop-blur-lg text-black shadow-md"
            : "bg-transparent"
          : "bg-[#e9e9e9]/80 backdrop-blur-lg text-black shadow-md"
      }
      ${isScrolled ? "h-20" : "h-[6rem]"} 
         flex items-center justify-between fixed top-0 left-0 w-screen px-5 transition-all duration-200 z-20`}
    >
      <Link
        href="/"
        className="flex lg:flex-1 h-full relative w-full gap-10 items-center"
      >
        <Logo />
        <h1 className="text-sm lg:text-xl font-bold">ST. JOHN'S COLLEGE</h1>
      </Link>

      <button className="lg:hidden max-lg:flex-1 text-white flex justify-end">
        {<Menu size={24} />}
      </button>

      <div className={`hidden lg:flex w-full lg:w-auto justify-center flex-1`}>
        <ul className="flex flex-col lg:flex-row gap-4 lg:items-center">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className={`${
                usePathname() == item.link
                  ? isHomePage
                    ? `${isScrolled ? "bg-white" : "bg-white/30"}`
                    : "bg-white"
                  : ""
              }  px-3 py-1 hover:bg-white/30 rounded-full duration-200`}
            >
              <Link href={item.link} className="">
                {item.title}
              </Link>
            </li>
          ))}
          {/* <li
            className={`${
              isHomePage
                ? `${isScrolled ? "bg-white" : "bg-white/30"}`
                : "bg-white"
            }  px-3 py-1 rounded-full duration-200`}
          >
            <Link href="/" className="hover:text-gray-400">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/departments" className="hover:text-gray-400">
              DEPARTMENTS
            </Link>
          </li>

          <li>
            <Link href="/admin" className="hover:text-gray-400">
              ADMIN
            </Link>
          </li> */}
        </ul>
      </div>

      <ul className="flex flex-1 w-max gap-4 justify-end flex-nowrap">
        {session?.user ? (
          <SignOutButton />
        ) : (
          <Link
            href="/sign-in"
            className={"lg:flex-1 hidden lg:flex justify-end"}
          >
            <h1 className="flex flex-nowrap">sign In</h1>
          </Link>
        )}
      </ul>
      {/* </div> */}
    </nav>
  );
}

export default NavbarClient;
