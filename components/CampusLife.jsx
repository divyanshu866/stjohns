import React from "react";
import {
  ArrowRightIcon,
  BuildingLibraryIcon,
  TrophyIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

function CampusLife() {
  const campusLife = [
    {
      category: "Community",
      title: "Vibrant Student Life",
      description:
        "Join 100+ student organizations and clubs spanning arts, sports, and technology",
      image: "/campusLifeCommunity.jpg",
      alt: "Students participating in campus activities",
      icon: UsersIcon,
    },
    {
      category: "Facilities",
      title: "State-of-the-Art Campus",
      description:
        "Modern learning spaces with advanced labs, libraries, and innovation hubs",
      image: "/campusLifeFacilities.jpg",
      alt: "Modern university library",
      icon: BuildingLibraryIcon,
    },
    {
      category: "Sports",
      title: "Athletics & Wellness",
      description:
        "Premier sports facilities and wellness programs for all skill levels",
      image: "/campusLifeSports.jpg",
      alt: "University sports complex",
      icon: TrophyIcon,
    },
  ];
  return (
    <section className="relative py-20 bg-gradient-to-b from-white/90 via-white to-white/95 overflow-hidden min-h-screen z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-black dark:text-amber-50 mb-8 relative">
            Campus Life
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400 to-red-600 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-800 dark:text-stone-200 max-w-3xl mx-auto">
            Experience our vibrant community through Mughal-inspired courtyards,
            cultural symposiums, and architectural marvels
          </p>
        </div>

        {/* Enhanced Card Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {campusLife.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-sm overflow-hidden transition-all duration-500 hover:shadow-2xl bg-white cursor-pointer"
            >
              <div className="relative h-[32rem] rounded-sm overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="duration-700 scale-110 brightness-75 group-hover:brightness-75 group-hover:scale-100"
                  placeholder="blur"
                  blurDataURL="/placeholder-campus.jpg"
                />
                {/* Content Container */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-[#F8F5F2]">
                  <div className="flex absolute -top-72 right-4 items-center mb-3 gap-3">
                    {/* <div className="p-2 bg-[#8d3928] rounded-lg backdrop-blur-sm">
                      <item.icon className="w-6 h-6 text-white" />
                    </div> */}
                    <span className="text-sm bg-[#c4451f] px-3 py-1 rounded-full font-semibold tracking-wide uppercase text-[#E8D8C9]">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-2xl mb-2 text-white font-bold leading-tight">
                    {item.title}
                    {/* {item.category} */}
                  </h3>
                  <p className="text-[#E8D8C9] line-clamp-2 mt-1 text-base leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 pt-7">
                    <span className="font-medium">Discover More</span>
                    <div className="w-8 h-px bg-[#C76B4F] transition-all duration-300 group-hover:w-12" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated CTA Button */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-4 bg-[#c4451f] text-md text-white font-semibold rounded-full transition-all duration-500 hover:shadow-xl hover:scale-105 group">
            <span className="tracking-wide">Explore Campus Life</span>
            <ArrowRightIcon className="w-6 h-6 ml-4 transform transition-transform group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </section>
    /*<section className="relative py-20 bg-black/50 overflow-hidden z-10">
            <div className="container mx-auto px-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-50 mb-4 relative pb-8">
                        Campus Life
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                        Experience our vibrant community through diverse activities, cultural events, and modern facilities
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {campusLife.map((item, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    placeholder="blur"
                                    blurDataURL="/placeholder-campus.jpg"
                                />

                                {/!* Gradient Overlay *!/}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>

                                {/!* Content *!/}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 group-hover:-translate-y-2">
                                    <div className="flex items-center mb-3">
                                        <item.icon className="w-8 h-8 mr-3 text-blue-300" />
                                        <span className="text-sm font-semibold tracking-wide uppercase text-blue-100">
                      {item.category}
                    </span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-200 opacity-90 line-clamp-2">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/!* View More Button *!/}
                <div className="mt-12 text-center">
                    <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                        Explore Campus Life
                        <ArrowRightIcon className="w-5 h-5 ml-3 -mr-1" />
                    </button>
                </div>
            </div>

            {/!* Decorative Elements *!/}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-transparent to-transparent opacity-100 -z-10"></div>
            <div className="absolute bottom-0 right-0 -mr-48 -mb-48 w-96 h-96 bg-purple-200 rounded-full opacity-20 mix-blend-multiply"></div>
        </section>*/
  );
}

export default CampusLife;
