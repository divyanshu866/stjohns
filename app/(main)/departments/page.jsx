import React from "react";
import prisma from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";
async function Departments() {
  const departments = await prisma.departments.findMany();
  return (
    <div className="w-full pt-36 relative overflow-hidden bg-gradient-to-b from-[#f5f5f4] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-black dark:text-amber-50 mb-8 relative">
            Academic Departments
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400 to-red-600 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-800 dark:text-stone-200 max-w-3xl mx-auto">
            Explore our diverse academic disciplines and specialized fields of
            study
          </p>
        </div>
        {/* Department Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {departments.map((department) => (
            <Link
              href={`/departments/${department.id}`}
              key={department.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-80">
                <div className="absolute inset-0 bg-gradient-to-t from-[#000]/90 via-transparent to-transparent z-10" />
                <Image
                  src={"/" + department.image}
                  alt={department.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL="/placeholder-department.jpg"
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-[#f5f5f4] z-20 space-y-3">
                <h3 className="text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:-translate-y-1">
                  {department.title}
                </h3>
                <p className="text-sm opacity-90 line-clamp-2 transition-opacity duration-300 group-hover:opacity-100 leading-snug">
                  {department.description}
                </p>
                <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">
                    Explore Department
                  </span>
                  <ChevronRightIcon className="w-4 h-4 ml-2" />
                </div>
              </div>

              {/* Hover Parallax Effect */}
              <div className="absolute inset-0 hidden group-hover:block transition-opacity">
                <div className="absolute inset-0 animate-gradient-x bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Departments;
