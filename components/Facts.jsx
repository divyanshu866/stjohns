import React from "react";
// Import required icons
import {
  AcademicCapIcon,
  BookOpenIcon,
  BriefcaseIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

function Facts() {
  const quickFacts = [
    {
      number: "175",
      title: "Years of Excellence",
      description: "Decades of academic leadership and innovation",
      iconComponent: AcademicCapIcon,
    },
    {
      number: "25k",
      title: "Students Enrolled",
      description: "Vibrant community of learners and creators",
      iconComponent: UserGroupIcon,
    },
    {
      number: "150",
      title: "Courses Offered",
      description: "Diverse programs across disciplines",
      iconComponent: BookOpenIcon,
    },
    {
      number: "95",
      title: "Employment Rate",
      description: "Graduates securing career success",
      iconComponent: BriefcaseIcon,
    },
  ];
  return (
    /* Quick Facts Section */
    <section className="relative py-24 bg-gradient-to-b from-white/95  via-white to-white/95 overflow-hidden z-10">
      <div className="container mx-auto lg:px-20">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-black dark:text-amber-50 mb-8 relative">
            Some Numbers That Matter
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400 to-red-600 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-800 dark:text-stone-200 max-w-2xl mx-auto">
            Discover the unique advantages that make us the preferred choice for
            future leaders
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map((fact, index) => (
            <div
              key={index}
              className="relative group bg-[#422416] p-8 rounded-sm hover:shadow-xl transition-all duration-200 border-2 border-amber-500 hover:border-amber-400/50 cursor-pointer"
            >
              {/* Icon container */}
              <div className="mb-6 relative">
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-amber-400 to-red-600 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                  <fact.iconComponent className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-red-600 bg-clip-text text-transparent mb-2">
                {fact.number}+
              </div>
              <h3 className="text-2xl font-bold text-amber-50 mb-3">
                {fact.title}
              </h3>
              <p className="text-stone-200 leading-relaxed">
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    /*<section className="relative pt-20 pb-24 overflow-hidden bg-slate-200 z-10">

            <div className="mx-auto lg:px-20">
                <div className="grid md:grid-cols-4 md:gap-4 lg:gap-5">
                    {quickFacts.map((fact, index) => (
                        <div
                            key={index}
                            className="relative p-8 bg-gradient-to-br border-2 border-gray-300/70 from-gray-500 to-gray-900 rounded-2xl shadow-lg hover:shadow-md transition-all duration-300 group overflow-hidden hover:border-cyan-300/30"
                        >
                            {/!* Animated background element *!/}
                            <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/!* Floating number effect *!/}
                            <div className="absolute -top-8 -right-8 text-[120px] font-black text-yellow-600/10 group-hover:text-cyan-600/20 transition-all duration-500">
                                {fact.number}
                            </div>

                            <div className="relative z-10 text-center">
                                <div className="mb-6 flex justify-center">
                                    <div className="p-4 bg-gradient-to-r from-yellow-400 to-gray-600 rounded-full shadow-sm inline-flex hover:shadow-md transition-shadow">
                                        <fact.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-gray-600 bg-clip-text text-transparent mb-2">
                                    {fact.number}+
                                </div>
                                <h3 className="text-xl font-semibold text-slate-100 mb-2">{fact.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">{fact.description}</p>
                            </div>

                            {/!* Animated border *!/}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-300/50 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

                {/!* Decorative elements *!/}
                <div className="absolute top-0 left-0 w-48 h-48 bg-cyan-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>
            </div>
        </section>*/
  );
}

export default Facts;
