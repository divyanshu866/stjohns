import React from "react";

function department({ params }) {
  return (
    <div className="h-screen w-full flex justify-center items-center text-5xl text-black">
      {params.departmentId}
    </div>
  );
}

export default department;
