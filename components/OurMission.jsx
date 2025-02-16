import React from "react";

function OurMission() {
  return (
    <section className="max-w-7xl mx-auto flex justify-center gap-10">
      <div className="h-96 w-96 rounded-lg border-4 border-white shadow-md overflow-hidden">
        <img src="/ourmission.jpg" className="h-full object-cover" alt="" />
      </div>
      <div className="flex flex-col w-96">
        <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-700 text-wrap">
          Prestige University is dedicated to providing quality education and
          fostering innovative research to shape future leaders. Our world-class
          faculty and state-of-the-art facilities empower students to achieve
          academic excellence and personal growth.
        </p>
      </div>
    </section>
  );
}

export default OurMission;
