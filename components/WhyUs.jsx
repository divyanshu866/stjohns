import React from "react";

// Import required icons
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  RocketLaunchIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

function WhyUs() {
  const features = [
    {
      title: "World-Class Education",
      description:
        "Accredited programs with cutting-edge curriculum designed with industry leaders",
      iconComponent: AcademicCapIcon,
    },
    {
      title: "Expert Faculty",
      description:
        "Learn from Nobel laureates, industry pioneers, and research visionaries",
      iconComponent: UserCircleIcon,
    },
    {
      title: "Advanced Facilities",
      description:
        "$250M campus with next-gen labs, innovation hubs, and research centers",
      iconComponent: BuildingLibraryIcon,
    },
    {
      title: "Career Success",
      description:
        "95% employment rate with Fortune 500 companies & Silicon Valley startups",
      iconComponent: RocketLaunchIcon,
    },
  ];

  return (
    /* Why Choose Us Section */
    <section className="relative py-24 bg-gradient-to-b from-white/95 via-white/70 to-white/90 overflow-hidden z-10">
      <div className="container mx-auto lg:px-20">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-black dark:text-amber-50 mb-8 relative">
            Why Choose Us?
            <span className="absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400 to-red-600 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-800 dark:text-stone-200 max-w-2xl mx-auto">
            Discover the unique advantages that make us the preferred choice for
            future leaders
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group {/* bg-[#422416]  */} bg-[#8d3928] p-8 rounded-sm hover:shadow-xl transition-all duration-200 hover:-translate-y-4 border-2 border-amber-500 hover:border hover:border-amber-400/50 cursor-pointer"
            >
              {/* Icon container */}
              <div className="mb-6 relative">
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-amber-400 to-red-600 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                  <feature.iconComponent className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-amber-50 mb-3">
                {feature.title}
              </h3>
              <p className="text-stone-200 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
