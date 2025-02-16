"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Hero() {
  const images = [
    {
      src: "/AIUpscalled.png",
      attribute: "scale-105",
    },
    {
      src: "/stjohnscloudy.jpg",
      attribute: "scale-105",
    },
    {
      src: "/dep_art.jpg",
      attribute: "scale-105",
    },
  ];
  const [imageSrc, setImageSrc] = useState(images[0].src);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) return; // Ensure hero exists

    const handleScroll = () => {
      if (window.scrollY > 3 * window.innerHeight) {
        setImageSrc(images[0].src);
        hero.style.transform = "scale(1.05)";
      } else if (window.scrollY > window.innerHeight - 50) {
        setImageSrc(images[1].src);
        hero.style.transform = "scale(1)";
      } else {
        setImageSrc(images[0].src);
        hero.style.transform = "scale(1.05)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="bg-white relative group h-screen w-screen flex items-center justify-center z-0 overflow-hidden">
      <div
        id="hero"
        className="h-full fixed w-screen flex flex-row transition-transform scale-105 ease-out duration-700"
      >
        <div
          className="h-screen w-screen overflow-hidden relative group"
          style={{ minWidth: "100vw" }}
        >
          <Image
            src={imageSrc}
            alt="campus"
            fill
            className={`object-cover h-full w-full saturate-150 transition-transform duration-700 ease-out group-hover:scale-105`}
            blurDataURL="/placeholder-logo.jpg"
          />
        </div>
      </div>

      <div className="absolute top-[35%] h-max w-full flex flex-col justify-center items-center text-center z-[3]">
        {/* Mughal-inspired decorative blip */}
        <div className="absolute -inset-12 z-0 opacity-30">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.2)_0%,transparent_60%)]">
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-50">
              {/* Mughal-style geometric pattern */}
              <pattern id="mughal-pattern" x="0" y="0" width="0.2" height="0.2">
                <path
                  d="M50 0 L75 25 L100 0 L100 25 L75 50 L100 75 L75 100 L50 75 L25 100 L0 75 L25 50 L0 25 L0 0 L25 25 Z"
                  fill="rgba(234,179,8,0.5)"
                  stroke="rgba(185,28,28,0.15)"
                  strokeWidth="1"
                />
              </pattern>
              <rect
                x="0"
                y="0"
                width="100"
                height="100"
                fill="url(#mughal-pattern)"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-[4]">
          {/* Animated Heading */}
          <h1 className="text-5xl bg-gradient-to-r from-white via-yellow-50 to-orange-500 bg-clip-text text-transparent md:text-6xl font-bold mb-4 animate-gradient font-sans drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
            FACULTY OF COMMERCE
          </h1>

          {/* Dynamic Subheading */}
          <p className="text-xl text-left md:text-xl font-medium text-amber-50 mb-8 max-w-3xl animate-fade-in backdrop-blur-[0px] px-4 py-2 rounded-full">
            Empowering Future Leaders in Commerce and Innovation
          </p>

          {/* Interactive Buttons */}
          <div className="flex gap-4">
            <button className="text-sm font-semibold text-amber-50 bg-gradient-to-br from-orange-700 via-amber-700 to-red-900 px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-amber-500/30">
              Meet Our Faculty
            </button>
            {/* <button className="text-sm font-semibold text-amber-50 bg-transparent border-2 border-amber-500/40 px-8 py-3 rounded-full hover:bg-amber-500/20 hover:text-amber-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Meet Our Faculty
            </button> */}
          </div>
        </div>
      </div>

      {/* <div className="absolute inset-0 bg-black/5 z-[2]"></div> */}
    </section>
  );
}

export default Hero;
