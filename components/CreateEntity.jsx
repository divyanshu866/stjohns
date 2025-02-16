"use client";

import { useState } from "react";
import AddDepartment from "./AddDepartment";
import EventForm from "./EventForm";

export default function CreateEntity() {
  const [activeForm, setActiveForm] = useState("department");

  return (
    <div className="container mx-auto p-4">
      {/* Navigation for swapping forms */}
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setActiveForm("department")}
          className={`px-4 py-2 rounded ${
            activeForm === "department"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Department
        </button>
        <button
          onClick={() => setActiveForm("event")}
          className={`px-4 py-2 rounded ${
            activeForm === "event"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Event / News
        </button>
      </div>

      {/* Conditionally render the form */}
      {activeForm === "department" && <AddDepartment />}
      {activeForm === "event" && <EventForm />}
    </div>
  );
}
