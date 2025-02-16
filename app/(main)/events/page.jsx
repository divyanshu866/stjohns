import db from "@/lib/db";
import { ArrowRightIcon, CalendarIcon } from "lucide-react";
import Image from "next/image";
async function EventsAndNews() {
  const events = await db.events.findMany({
    orderBy: { date: "desc" },
  });
  return (
    <section className="py-16 pt-36 bg-[#fff] z-10 relative">
      <div className="mx-auto px-4 max-w-7xl">
        {/* Section Header */}

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-black dark:text-amber-50 mb-8 relative">
            Latest News & Events
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400 to-red-600 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-800 dark:text-stone-200 max-w-3xl mx-auto">
            Stay updated with our latest achievements and campus events.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, index) => (
            <article
              key={index}
              className="group relative bg-white rounded-sm transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-60 overflow-hidden border-[#764024]/20">
                <Image
                  src={"/" + event.image}
                  alt={event.image}
                  fill
                  className="object-cover transition-transform duration-500 brightness-90 scale-105 group-hover:scale-100"
                  placeholder="blur"
                  blurDataURL="/placeholder-news.jpg"
                />
                <span
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                    event.category === "Event"
                      ? "bg-[#764024] text-[#f5f5f4]"
                      : "bg-[#422416] text-[#f5f5f4]"
                  }`}
                >
                  {event.category}
                </span>
              </div>

              <div className="p-6 bg-[#461f0b]">
                <div className="flex items-center text-sm text-[#f5f5f4]/90 mb-3">
                  <CalendarIcon className="w-5 h-5 mr-2 text-[#f5f5f4]/80" />
                  {event.date.toLocaleDateString()}
                </div>
                <h3 className="text-xl font-semibold text-[#f5f5f4] mb-2 hover:text-[#f5f5f4]/80 transition-colors">
                  <a href={"#"} className="relative block">
                    {event.title}
                    <span className="absolute inset-0"></span>
                  </a>
                </h3>
                <p className="text-[#f5f5f4]/80 line-clamp-3 mb-4 text-sm leading-relaxed">
                  {event.description}
                </p>
                <div className="flex items-center text-[#f5f5f4] font-medium hover:text-[#f5f5f4]/80 transition-colors">
                  Read More
                  <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <button className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-[#422416] to-[#422416] text-[#f5f5f4] font-semibold rounded-lg hover:scale-[1.02] transition-transform duration-300 shadow-sm hover:shadow-md">
            View All News & Events
            <ArrowRightIcon className="w-5 h-5 ml-3 -mr-1 transform group-hover:translate-x-2 transition-transform" />
          </button>
        </div> */}

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#764024]/5 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
}

export default EventsAndNews;
